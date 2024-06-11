// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import pool from "@/pages/libs/mysql";

export default async function GET(req: NextApiRequest,
    res: NextApiResponse) {
    try {
        const db = await pool.getConnection();
        const query = 'SELECT DISTINCT * FROM utilisateur';
        const [rows] = await db.execute(query)
        db.release();
        console.log(rows);

        return res.json(rows);
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}