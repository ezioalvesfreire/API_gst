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


    const descriptionMosfet_1 = newMosfet.descriptionMosfet_1    
    const channelMosfet_1 = newMosfet.channelMosfet_1
    const packageMosfet_1 = newMosfet.packageMosfet_1   
    const drainCurrent_1 = newMosfet.drainCurrent_1   
    const voltageDrainSource_1 = newMosfet.voltageDrainSource_1    
    const resistanceDraiSource_1 = newMosfet.resistanceDraiSource_1
    

    const descriptionMosfet_2 = newMosfet.descriptionMosfet_2
    const channelMosfet_2 = newMosfet.channelMosfet_2
    const packageMosfet_2 = newMosfet.packageMosfet_2
    const drainCurrent_2 = newMosfet.drainCurrent_2
    const voltageDrainSource_2 = newMosfet.voltageDrainSource_2
    const resistanceDraiSource_2 = newMosfet.resistanceDraiSource_2


    const res1: any = await conn.query('SELECT count(*) qtd FROM mosfets WHERE ?', [{ descriptionMosfet: descriptionMosfet_1}]);
    if(res1[0][0].qtd == 0) {
        const arrayMosfet1 = { descriptionMosfet: descriptionMosfet_1, channelMosfet: channelMosfet_1, packageMosfet: packageMosfet_1, drainCurrent: drainCurrent_1, voltageDrainSource: voltageDrainSource_1, resistanceDraiSource: resistanceDraiSource_1 }
        conn.query('INSERT INTO mosfets SET ?', [arrayMosfet1]);
    }

    const res2: any = await conn.query('SELECT count(*) qtd FROM mosfets WHERE ?', [{ descriptionMosfet: descriptionMosfet_2}]);
    if(res2[0][0].qtd) {
        const arrayMosfet2 = { descriptionMosfet: descriptionMosfet_2, channelMosfet: channelMosfet_2, packageMosfet: packageMosfet_2, drainCurrent: drainCurrent_2, voltageDrainSource: voltageDrainSource_2, resistanceDraiSource: resistanceDraiSource_2 }
        conn.query('INSERT INTO mosfets SET ?', [arrayMosfet2]);
    }
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
