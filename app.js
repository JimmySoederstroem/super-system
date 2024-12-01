import { Hono } from 'npm:hono';
import { Client } from 'https://deno.land/x/postgres@v0.17.0/mod.ts';
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts';
import { secureHeaders, NONCE } from 'npm:hono/secure-headers';
import register from './routes/register.js';
import login from './routes/login.js';

const app = new Hono();
const client = new Client({
    user: 'postgres',
    database: 'postgres',
    hostname: 'localhost',
    password: 'Secret1234!',
    port: 5432,
});

await client.connect();

// Middleware to set security headers with nonces
app.use('*', secureHeaders({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", `'nonce-${NONCE}'`],
            styleSrc: ["'self'", `'nonce-${NONCE}'`],
            imgSrc: ["'self'"],
            connectSrc: ["'self'"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
            frameAncestors: ["'none'"],
            baseUri: ["'self'"],
            formAction: ["'self'"]
        }
    },
    xFrameOptions: 'DENY',
    xContentTypeOptions: 'nosniff',
    hsts: { maxAge: 63072000, includeSubDomains: true }
}));

// Middleware to serve static files
app.use('/static/*', serveStatic({ root: '.' }));

app.get('/', async (c) => {
    try {
        const html = await Deno.readTextFile('./html/index.html');
        return c.html(html.replace(/<script/g, `<script nonce="${NONCE}"`).replace(/<style/g, `<style nonce="${NONCE}"`));
    } catch (error) {
        console.error('Error reading index.html:', error);
        return c.text('Internal Server Error', 500);
    }
});

app.get('/register', async (c) => {
    try {
        const html = await Deno.readTextFile('./views/register.html');
        return c.html(html.replace(/<script/g, `<script nonce="${NONCE}"`).replace(/<style/g, `<style nonce="${NONCE}"`));
    } catch (error) {
        console.error('Error reading register.html:', error);
        return c.text('Internal Server Error', 500);
    }
});

app.get('/login', async (c) => {
    try {
        const html = await Deno.readTextFile('./views/login.html');
        return c.html(html.replace(/<script/g, `<script nonce="${NONCE}"`).replace(/<style/g, `<style nonce="${NONCE}"`));
    } catch (error) {
        console.error('Error reading login.html:', error);
        return c.text('Internal Server Error', 500);
    }
});

app.post('/register', async (c) => {
    const formData = await c.req.json();
    return register(c, client, formData);
});

app.post('/login', async (c) => {
    const formData = await c.req.json();
    return login(c, client, formData);
});

serve(app.fetch, { port: 8000 });
console.log('Server running on port 8000');
