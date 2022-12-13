import connection from '../database.js';

export async function customersGet(req, res) {
    
  try {

    const customers = await connection.query('SELECT * FROM customers;');
    return res.send(customers.rows);

  } catch (err) {

    return res.sendStatus(500);

  }
  
}