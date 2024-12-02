import { hash } from 'https://deno.land/x/bcrypt@v0.3.0/mod.ts';
import { z } from 'npm:zod';

export default async (c, client) => {
    try {
        const formData = await c.req.json();
        const { username, password, email, age, consent, role } = formData;

        const schema = z.object({
            username: z.string().max(50),
            password: z.string().min(8).regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/),
            email: z.string().email(),
            age: z.number().int().nonnegative(),
            consent: z.boolean(),
            role: z.enum(['reserver', 'administrator']),
        });

        try {
            schema.parse({ username, password, email, age, consent, role });
        } catch (e) {
            return c.json({ error: e.errors }, 400);
        }

        try {
            const userCheck = await client.queryObject(
                'SELECT username FROM abc123_users WHERE username = $1',
                [username]
            );
            if (userCheck.rowCount > 0) {
                return c.json({ error: 'Username already exists' }, 400);
            }
        } catch (error) {
            return c.json({ error: 'Registration failed' }, 500);
        }

        let hashedPassword = await hash(password);

        try {
            await client.queryArray(
                `INSERT INTO abc123_users (username, password, email, age, consent, role) VALUES ($1, $2, $3, $4, $5, $6)`,
                [username, hashedPassword, email, age, consent, role]
            );
            return c.json({ message: 'User registered successfully' }, 201);
        } catch (error) {
            return c.json({ error: 'Registration failed' }, 500);
        }
    } catch (error) {
        return c.json({ error: 'Registration failed' }, 500);
    }
};
