import { Request, Response } from 'express';

import { connect } from '../database';
import { MosfetInterface } from '../interface/MosfetInterface';

import { checkChannelMosfet, checkResistanceDrainSource, calculateEletricalPower } from '../services/mosfet.service';

export async function getMosfets(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const mosfets = await conn.query('SELECT * FROM mosfets');
    return res.json(mosfets[0]);
};

export async function createMosfet(req: Request, res: Response) {
    const newMosfet: MosfetInterface = req.body;

    const conn = await connect();

    let separator = "";
    let messegeMosfet = "";
    let messegeMosfetJson = "";

    for(var i=0; i<Object.keys(newMosfet).length; i++){

    const descriptionMosfet = Object.values(newMosfet)[i].descriptionMosfet

    const consult: any = await conn.query('SELECT count(*) qtd FROM mosfets WHERE ?', [{ descriptionMosfet: descriptionMosfet }]);
    if (consult[0][0].qtd == 0) {
        conn.query('INSERT INTO mosfets SET ?', Object.values(newMosfet)[i]);
            messegeMosfet = "Sucesso: O transisfor mosfet "+descriptionMosfet+" foi cadastrado com sucesso";
        } else {
            messegeMosfet = "Erro: O transisfor mosfet "+descriptionMosfet+" já existe";
        }
        messegeMosfetJson = messegeMosfetJson + separator + messegeMosfet
        separator = ", "
    }

    const check_channel = checkChannelMosfet(newMosfet);

    const check_resistance_drainSource = checkResistanceDrainSource(newMosfet);

    const calculate_eletrical_power = calculateEletricalPower(Object.values(newMosfet)[0].drainCurrent, Object.values(newMosfet)[1].drainCurrent, Object.values(newMosfet)[0].voltageDrainSource, Object.values(newMosfet)[1].voltageDrainSource);
    
    return res.json({
        messegeMosfetJson: messegeMosfetJson, checkChannel: check_channel, check_resistance_drainSource: check_resistance_drainSource, calculate_eletrical_power: calculate_eletrical_power
    });
}

export async function getMosfet(req: Request, res: Response): Promise<Response> {
    const id = req.params.mosfetId;
    const conn = await connect();
    const mosfets = await conn.query('SELECT * FROM mosfets WHERE id_mosfet = ?', [id]);
    return res.json(mosfets[0]);
}
