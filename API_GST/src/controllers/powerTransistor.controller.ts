import {Request, Response} from 'express';
import {connect} from '../database';
import { PowerTransistorInterface} from '../interface/PowerTransistorInterface';

export async function getPowerTransistors(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const powerTransistors = await conn.query('SELECT * FROM powerTransistors');
    return  res.json(powerTransistors[0]);
};

export async function createPowerTransistors(req: Request, res: Response){
    const newPowerTransistor: PowerTransistorInterface = req.body;
    const conn = await connect();
    //console.log(newMosfet);
    await conn.query('INSERT INTO powerTransistors SET ?', [newPowerTransistor]);
    return res.json({
        message: 'Power Transistor Created' 
    });

}

 export async function getPowerTransistor(req: Request, res: Response): Promise<Response>{
   const id =  req.params.id_powerTransistor;
   const conn = await connect();
   const powerTransistors = await conn.query('SELECT * FROM powerTransistors WHERE id_powerTransistor = ?', [id]);
    return res.json(powerTransistors[0]);
 } 