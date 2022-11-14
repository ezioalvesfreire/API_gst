import {Request, Response} from 'express';

import {connect} from '../database';
import { MosfetInterface} from '../interface/MosfetInterface';

export async function getMosfets(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const mosfets = await conn.query('SELECT * FROM mosfets');
    return  res.json(mosfets[0]);
};

export async function createMosfet(req: Request, res: Response){
    const newMosfet: MosfetInterface = req.body;
    const conn = await connect();
    //console.log(newMosfet);
    await conn.query('INSERT INTO mosfets SET ?', [newMosfet]);
    return res.json({
        message: 'Mosfet Created' 
    });

}

 export async function getMosfet(req: Request, res: Response): Promise<Response>{
   const id =  req.params.mosfetId;
   const conn = await connect();
   const mosfets = await conn.query('SELECT * FROM mosfets WHERE id_mosfet = ?', [id]);
    return res.json(mosfets[0]);
 } 
   