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