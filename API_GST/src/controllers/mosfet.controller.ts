import { Request, Response } from 'express';

import { connect } from '../database';
import { MosfetInterface } from '../interface/MosfetInterface';

export async function getMosfets(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const mosfets = await conn.query('SELECT * FROM mosfets');
    return res.json(mosfets[0]);
};

export async function createMosfet(req: Request, res: Response) {
    const newMosfet: MosfetInterface = req.body;

    const conn = await connect();

    const descript1 = newMosfet.descript1
    const descript2 = newMosfet.descript2
    const ch1 = newMosfet.ch1
    const ch2 = newMosfet.ch2
    const pack1 = newMosfet.pack1
    const pack2 = newMosfet.pack2
    const drainCurrent1 = newMosfet.drainCurreunt1
    const drainCurrent2 = newMosfet.drainCurreunt2
    const voltageDrainSource1 = newMosfet.voltageDrainSource1
    const voltageDrainSource2 = newMosfet.voltageDrainSource2
    const resistanceDraiSource1 = newMosfet.resistanceDraiSource1
    const resistanceDraiSource2 = newMosfet.resistanceDraiSource2


    const arrayMosfet1 = { descript: descript1, ch: ch1, pack: pack1, drainCurreunt: drainCurreunt1, voltageDrainSource: voltageDrainSource1, resistanceDraiSource: resistanceDraiSource1 }
    conn.query('INSERT INTO mosfets SET ?', [arrayMosfet1]);

    const arrayMosfet2 = { descript: descript2, ch: ch2, pack: pack2, drainCurreunt: drainCurreunt2, voltageDrainSource: voltageDrainSource2, resistanceDraiSource: resistanceDraiSource2 }
    conn.query('INSERT INTO mosfets SET ?', [arrayMosfet2]); 
    return res.json({
        message: 'Mosfet Created', newMosfet
    });
}

export async function getMosfet(req: Request, res: Response): Promise<Response> {
    const id = req.params.mosfetId;
    const conn = await connect();
    const mosfets = await conn.query('SELECT * FROM mosfets WHERE id_mosfet = ?', [id]);
    return res.json(mosfets[0]);
}

