import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/pages/libs/mysql";


export default async function GET(req: NextApiRequest,
    res: NextApiResponse
) {
    const {id} = req.query // user id
    try {
        const db = await pool.getConnection()
        const query = 'SELECT * FROM utilisateur WHERE idUtilisateur = ?'
        console.log(id);
        const [rows] = await db.execute(query, [id])
        db.release()
        console.log(rows);

        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
}