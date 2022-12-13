import { gameCheck } from "../models/models";

export async function getGameCheck(req, res, next) {

    const { name } = req.query;

    let games;

    if (name) {

        games = await connection.query("SELECT * FROM games WHERE LOWER(name) LIKE LOWER($1) || '%';",
            [name]
        );

    } else {

        games = await connection.query('SELECT * FROM games;');

    }

    req.gameSend = games.rows;

    next()

}

export async function gamePostValidate(req, res, next){

    const { name, categoryId } = req.body;

    const checkID = await connection.query(`SELECT * FROM categories WHERE id = $1`,
    [categoryId]
    );

    const validate = gameCheck.validate(req.body, {abortEarly: false});

    if (validate.error){

        const errors = validate.error.details.map((detail) => detail.message);
        return res.status(400).send(errors);

    }

    if (checkID.rows.length === 0){
        
        return res.sendStatus(400);
    }

    const nameCheck = await connection.query(`SELECT * FROM games WHERE LOWER(name) = LOWER($1)`,
    [name]
    );

    if (nameCheck.rows.length > 0){
        return res.sendStatus(409);
    }

    next();
}