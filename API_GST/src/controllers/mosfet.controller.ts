import {Request, Response} from 'express';

import {connect} from '../database';

export async function getMosfets(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const mosfets = await conn.query('SELECT * FROM transistors');
    return  res.json(mosfets[0]);
};

export async function createMosfet(req: Request, res: Response){
    const newMosfet = req.body;
    return res.json({
        message: 'Mosfet Created'
    });

}