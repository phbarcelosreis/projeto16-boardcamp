import connection from '../database.js';

export async function customersGet(req, res) {

    try {

        const customers = await connection.query('SELECT * FROM customers;');
        return res.send(customers.rows);

    } catch (err) {

        return res.sendStatus(500);

    }

}

export async function customersGetID(req, res) {

    const { id } = req.params;

    try {

        const foundCustomer = await connection.query(
            'SELECT * FROM customers WHERE id = $1;',
            [id]
        );

        return res.send(foundCustomer.rows[0]);

    } catch (err) {

        return res.sendStatus(500);

    }

}

export async function customersPost(req, res) {

    const { name, phone, cpf, birthday } = req.body;

    try {

        await connection.query(
            'INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4);',
            [name, phone, cpf, birthday]
        );

    } catch (err) {

        return res.sendStatus(500);

    }

}

export async function customerUpdate(req, res) {

    const { id } = req.params;

    const { name, phone, cpf, birthday } = req.body;

    try {

        await connection.query(
            'UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5;',
            [name, phone, cpf, birthday, id]
        );
        return res.sendStatus(200);

    } catch (err) {

        return res.sendStatus(500);

    }

}