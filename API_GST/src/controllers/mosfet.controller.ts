import {Request, Response} from 'express';

import {connect} from '../database';

export async function getMosfets(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const mosfets = await conn.query('SELECT * FROM transistors');
    return  res.json(mosfets[0]);
};