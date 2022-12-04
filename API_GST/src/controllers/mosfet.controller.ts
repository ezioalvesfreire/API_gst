import { Request, Response } from "express";

import { connect } from "../database";
import { MosfetInterface } from "../interface/MosfetInterface";

import {
  checkChannelMosfet,
  checkResistanceDrainSource,
  calculateEletricalPower,
} from "../services/mosfet.service";

export async function getMosfets(
  req: Request,
  res: Response
): Promise<Response> {
  const conn = await connect();
  const mosfets = await conn.query("SELECT * FROM mosfets");
  return res.json(mosfets[0]);
}

export async function createMosfet(req: Request, res: Response) {
  const newMosfet: MosfetInterface = req.body;

  const conn = await connect();

  let messegeMosfet1 = "Erro: O transisfor mosfet do formulário 1 já existe";
  let messegeMosfet2 = "Erro: O transisfor mosfet do formulário 2 já existe";

  const descriptionMosfet_1 = newMosfet.descriptionMosfet_1;
  const channelMosfet_1 = newMosfet.channelMosfet_1;
  const packageMosfet_1 = newMosfet.packageMosfet_1;
  const drainCurrent_1 = newMosfet.drainCurrent_1;
  const voltageDrainSource_1 = newMosfet.voltageDrainSource_1;
  const resistanceDraiSource_1 = newMosfet.resistanceDraiSource_1;
  const greatnessResistanceDraiSource_1 =
    newMosfet.greatnessResistanceDraiSource_1;

  const descriptionMosfet_2 = newMosfet.descriptionMosfet_2;
  const channelMosfet_2 = newMosfet.channelMosfet_2;
  const packageMosfet_2 = newMosfet.packageMosfet_2;
  const drainCurrent_2 = newMosfet.drainCurrent_2;
  const voltageDrainSource_2 = newMosfet.voltageDrainSource_2;
  const resistanceDraiSource_2 = newMosfet.resistanceDraiSource_2;

  const consult_1: any = await conn.query(
    "SELECT count(*) qtd FROM mosfets WHERE ?",
    [{ descriptionMosfet: descriptionMosfet_1 }]
  );
  if (consult_1[0][0].qtd == 0) {
    const arrayMosfet1 = {
      descriptionMosfet: descriptionMosfet_1,
      channelMosfet: channelMosfet_1,
      packageMosfet: packageMosfet_1,
      drainCurrent: drainCurrent_1,
      voltageDrainSource: voltageDrainSource_1,
      resistanceDraiSource: resistanceDraiSource_1,
    };
    conn.query("INSERT INTO mosfets SET ?", [arrayMosfet1]);

    messegeMosfet1 =
      "Sucesso: O transisfor mosfet do formulário 1 foi cadastrado com sucesso";
  }

  const consult_2: any = await conn.query(
    "SELECT count(*) qtd FROM mosfets WHERE ?",
    [{ descriptionMosfet: descriptionMosfet_2 }]
  );
  if (consult_2[0][0].qtd == 0) {
    const arrayMosfet2 = {
      descriptionMosfet: descriptionMosfet_2,
      channelMosfet: channelMosfet_2,
      packageMosfet: packageMosfet_2,
      drainCurrent: drainCurrent_2,
      voltageDrainSource: voltageDrainSource_2,
      resistanceDraiSource: resistanceDraiSource_2,
    };
    conn.query("INSERT INTO mosfets SET ?", [arrayMosfet2]);

    messegeMosfet2 =
      "Sucesso: O transisfor mosfet do formulário 2 foi cadastrado com sucesso";
  }

  const check_channel = checkChannelMosfet(newMosfet);

  const check_resistance_drainSource = checkResistanceDrainSource(newMosfet);

  const calculate_eletrical_power = calculateEletricalPower( drainCurrent_1, drainCurrent_2, 
                                                             voltageDrainSource_1,voltageDrainSource_2 );
  return res.json({
    msgMosf1WasInseted: messegeMosfet1,
    msgMosf2WasInseted: messegeMosfet2,
    checkChannel: check_channel,
    check_resistance_drainSource: check_resistance_drainSource,
    calculate_eletrical_power: calculate_eletrical_power,
  });
}

export async function getMosfet(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.mosfetId;
  const conn = await connect();
  const mosfets = await conn.query(
    "SELECT * FROM mosfets WHERE id_mosfet = ?",
    [id]
  );
  return res.json(mosfets[0]);
}