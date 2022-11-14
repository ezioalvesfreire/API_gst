import {Request, Response} from 'express';
import {connect} from '../database';
import { MosfetInterface} from '../interface/MosfetInterface';

export async function getMosfets(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const mosfets = await conn.query('SELECT * FROM mosfets');
    return  res.json(mosfets[0]);
};
