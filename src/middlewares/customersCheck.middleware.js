export async function customersCheckID(req, res, next) {

    const { id } = req.params;

    const checkID = await connection.query(
        'SELECT * FROM customers WHERE id = $1;',
        [id]
    );
    
    if (!checkID.rowCount) return res.sendStatus(404);

    next()

}