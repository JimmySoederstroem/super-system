import { hash } from 'https://deno.land/x/bcrypt@v0.3.0/mod.ts';
import { z } from 'npm:zod';

export default async (c, client) => {
    try {
        const formData = await c.req.parseBody();
        const { username, password, email, age, consent, role } = formData;
        console.log('Received registration data:', { username, password, email, age, consent, role });

        const consentBoolean = consent === 'on' || consent === true;
        const ageInt = parseInt(age);

        // Define Zod schema for validation
        const schema = z.object({
            username: z.string().email().max(50),
            password: z.string(),
            email: z.string().email(),
            age: z.number().int().nonnegative(),
            consent: z.boolean(),
            role: z.enum(['reserver', 'administrator']),
        });

        // Validate input data
        try {
            console.log('Validating input data...');
            schema.parse({ username, password, email, age: ageInt, consent: consentBoolean, role });
            console.log('Validation successful');
        } catch (e) {
            console.error('Validation error:', e.errors);
            return c.json({ error: e.errors }, 400);
        }

        // Check if username is unique
        try {
            console.log('Checking if username is unique...');
            const userCheck = await client.queryObject(
                'SELECT username FROM abc123_users WHERE username = $1',
                [username]
            );
            if (userCheck.rowCount > 0) {
                console.error('Username already exists');
                return c.json({ error: 'Username already exists' }, 400);
            }
            console.log('Username is unique');
        } catch (error) {
            console.error('Error checking username uniqueness:', error);
            return c.json({ error: 'Registration failed' }, 500);
        }

        // Hash the password
        let hashedPassword;
        try {
            console.log('Hashing password...');
            hashedPassword = await hash(password);
            console.log('Password hashed successfully');
        } catch (error) {
            console.error('Error hashing password:', error);
            return c.json({ error: 'Registration failed' }, 500);
        }

        // Insert user into database
        try {
            console.log('Inserting user into database...');
            await client.queryArray(
                `INSERT INTO abc123_users (username, password, email, age, consent, role) VALUES ($1, $2, $3, $4, $5, $6)`,
                [username, hashedPassword, email, ageInt, consentBoolean, role]
            );
            console.log('User registered successfully');
            return c.json({ message: 'User registered successfully' }, 201);
        } catch (error) {
            console.error('Error inserting user into database:', error);
            return c.json({ error: 'Registration failed' }, 500);
        }
    } catch (error) {
        console.error('Error processing request:', error);
        return c.json({ error: 'Registration failed' }, 500);
    }
};