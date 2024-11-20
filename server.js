import { Hono } from 'npm:hono';
import { Client } from 'https://deno.land/x/postgres@v0.17.0/mod.ts';
import { hash } from 'https://deno.land/x/bcrypt@v0.3.0/mod.ts';
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';


const app = new Hono();
const client = new Client({
    user: 'postgres',
    database: 'postgres',
    hostname: 'localhost',
    password: 'Secret1234!',
    port: 5432,
});

await client.connect();

app.get('/', async (c) => {
    const html = await Deno.readTextFile('./index.html');
    return c.html(html);
});

app.post('/register', async (c) => {
    const { username, password, email, age, consent, role } = await c.req.json();
    const consentBoolean = consent === 'on' || consent === true; // Convert consent to boolean
    const ageInt = parseInt(age); // Convert age to integer
    console.log({ username, password, email, age: ageInt, consent: consentBoolean, role }); // Log the received data

    try {
        await client.queryArray(
            `INSERT INTO abc123_users (username, password, email, age, consent, role) VALUES ($1, $2, $3, $4, $5, $6)`,
            [username, password, email, ageInt, consentBoolean, role]
        );
        return c.json({ message: 'User registered successfully' }, 201);
    } catch (error) {
        console.error(error);
        return c.json({ error: 'Registration failed' }, 500);
    }
});

serve(app.fetch, { port: 8000 });
console.log('Server running on http://localhost:8000');