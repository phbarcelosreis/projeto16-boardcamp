export async function gameGet(req, res) {

    const game = req.gameSend

    try {

        return res.send(game);

    } catch (err) {

        return res.sendStatus(500);

    }

}

export async function gamePost(req, res) {

    const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

    try {

        await connection.query(
            'INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5);',
            [name, image, stockTotal, categoryId, pricePerDay]
        );

        return res.sendStatus(201);

    } catch (err) {

        return res.sendStatus(500);

    }

}