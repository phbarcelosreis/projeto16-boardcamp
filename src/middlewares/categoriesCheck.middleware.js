import { categoriesCheck } from "../models/models";

export async function checkCategoriesPost(req, res, next) {
    const { name } = req.body;

    const validation = categoriesCheck.validate(req.body, { abortEarly: false });
    
    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    const nameExists = await connection.query(
        'SELECT * FROM categories WHERE name = $1;',
        [name]
    );

    if (nameExists.rowCount) {
        return res.sendStatus(409);
    }

    next()

}