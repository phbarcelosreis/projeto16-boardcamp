import connection from '../database.js';

export async function categoriesGet(req, res) {
    try {

        const categories = await connection.query('SELECT * FROM categories;');
        return res.send(categories.rows);

    } catch (err) {

        return res.sendStatus(500);

    }
}

export async function categoriesPost(req, res) {
    const { name } = req.body;

    try {

        await connection.query('INSERT INTO categories (name) VALUES ($1);', [
            name,
        ]);

        return res.sendStatus(201);

    } catch (err) {

        return res.sendStatus(500);
    }
}