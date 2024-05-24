import pool from '@utils/db';

export const GET = async (req) => {
    try {
        const [rows] = await pool.query('SELECT * FROM supplier');
        return new Response(JSON.stringify(rows, {status: 200}))
    } catch (error) {
        console.error(error);
        return new Response("Failed to fetch all rows", {status: 500})
    }
}