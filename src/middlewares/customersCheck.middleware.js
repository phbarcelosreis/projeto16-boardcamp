import { customerCheck } from "../models/models";

export async function customersCheckID(req, res, next) {

    const { id } = req.params;

    const checkID = await connection.query(
        'SELECT * FROM customers WHERE id = $1;',
        [id]
    );

    if (!checkID.rowCount) return res.sendStatus(404);

    next()

}

export async function customerPostValidate(req, res, next) {

    const { cpf } = req.body;

    const checkCPF = await connection.query(`SELECT * FROM customers WHERE cpf = $1`,
        [cpf]
    );

    if (checkCPF.rows.length > 0) {

        return res.sendStatus(409);

    }

    const validate = customerCheck.validate(req.body, { abortEarly: false });

    if (validate.error) {

        const errors = validate.error.details.map((detail) => detail.message);
        return res.status(400).send(errors);

    } 

    next();
}