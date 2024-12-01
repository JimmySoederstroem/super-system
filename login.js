import { compare } from 'https://deno.land/x/bcrypt@v0.3.0/mod.ts';

export default async (c, client) => {
    try {
        const { username, password } = await c.req.json();
        console.log('Login attempt:', { username });

        let user;
        try {
            const result = await client.queryObject(
                'SELECT username, password FROM abc123_users WHERE username = $1',
                [username]
            );
            user = result.rows[0];
            if (!user) {
                return c.json({ error: 'Invalid username or password' }, 400);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            return c.json({ error: 'Login failed' }, 500);
        }

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            return c.json({ error: 'Invalid username or password' }, 400);
        }

        const ipAddress = c.req.headers.get('x-forwarded-for') || c.req.headers.get('cf-connecting-ip') || c.req.headers.get('remote-addr') || 'Unknown';

        try {
            await client.queryArray(
                `INSERT INTO login_logs (username, ip_address) VALUES ($1, $2)`,
                [username, ipAddress]
            );
        } catch (error) {
            console.error('Error logging login:', error);
        }

        return c.json({ message: 'Login successful' }, 200);
    } catch (error) {
        console.error('Error processing login:', error);
        return c.json({ error: 'Login failed' }, 500);
    }
};
