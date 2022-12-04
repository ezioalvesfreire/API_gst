import e from 'express';
import { createMosfet } from '../controllers/mosfet.controller';

let checkChannelMosfet_2 = true
let calculate_eletrical_power = true
let msg_mosfet_2_compatible = ""


export function checkChannelMosfet(newMosfet: Object) {
  const channelMosfet1 = Object.values(newMosfet)[0].channelMosfet;
  const channelMosfet2 = Object.values(newMosfet)[1].channelMosfet;
  const descriptionMosfet_1 = Object.values(newMosfet)[0].descriptionMosfet;
  const descriptionMosfet_2 = Object.values(newMosfet)[1].descriptionMosfet;
  if (channelMosfet1 !== channelMosfet2) {  
     msg_mosfet_2_compatible = "Erro 1: O transistor " + descriptionMosfet_2 + " não é compatível com o transistor " + descriptionMosfet_1 + ""; 
     checkChannelMosfet_2 = false
  } else {
    msg_mosfet_2_compatible = "Sucesso 1: O transistor " + descriptionMosfet_2 + " é compatível com o transistor " + descriptionMosfet_1 + "";
    checkChannelMosfet_2 = true
  }
  return {
    checkChannelMosfet_2: checkChannelMosfet_2, msgMosfet_2_compatible: msg_mosfet_2_compatible
   }

}

export function checkResistanceDrainSource(newMosfet: Object) {

  let check_resistance_drainSource = true
  let resistanceDraiSource_1 = Number(Object.values(newMosfet)[0].resistanceDraiSource)
  let resistanceDraiSource_2 = Number(Object.values(newMosfet)[1].resistanceDraiSource)
  const greatnessResistanceDraiSource_1 = Object.values(newMosfet)[0].greatnessResistanceDraiSource
  const greatnessResistanceDraiSource_2 = Object.values(newMosfet)[1].greatnessResistanceDraiSource

  resistanceDraiSource_1 = stdScalerResistanceDrainSource(resistanceDraiSource_1, greatnessResistanceDraiSource_1)

  resistanceDraiSource_2 = stdScalerResistanceDrainSource(resistanceDraiSource_2, greatnessResistanceDraiSource_2)

  const varianceResistanceDraiSource = 30

  const percentage_1 = resistanceDraiSource_1 / 100 * varianceResistanceDraiSource


  if ((resistanceDraiSource_2 <= (resistanceDraiSource_1 - percentage_1)) ||
    (resistanceDraiSource_2 >= (resistanceDraiSource_1 + percentage_1))
  ) {
    check_resistance_drainSource = false
  } else {
    check_resistance_drainSource = true
  }
  return {
    checkResistanceDrainSource: check_resistance_drainSource
  }

}

export function stdScalerResistanceDrainSource(resistanceDraiSource: number, greatnessResistanceDraiSource: any){
  if(greatnessResistanceDraiSource == "Ohms"){ resistanceDraiSource = resistanceDraiSource * 1000  }
    return resistanceDraiSource
}


export function calculateEletricalPower(drCurrent_1: any, drCurrent_2: any, vtDrainSource_1: any, vtDrainSource_2: any ){


  const drainCurrent_1 = drCurrent_1
  const drainCurrent_2 = drCurrent_2

  const voltageDrainSource_1 = vtDrainSource_1
  const voltageDrainSource_2 = vtDrainSource_2

  const powerElatricalMosfet_1 = drainCurrent_1 * voltageDrainSource_1
  const powerElatricalMosfet_2 = drainCurrent_2 * voltageDrainSource_2   
  
  const checkPwrCompatibility = checkPowerCompatibility(powerElatricalMosfet_1, powerElatricalMosfet_2)

  return checkPwrCompatibility

}


export function checkPowerCompatibility(powerElatricalMosfet_1: number, powerElatricalMosfet_2: number){

  const variancePowerElatricalMosfet = 30
  const percentage_mosfet_1 = powerElatricalMosfet_1 / 100 * variancePowerElatricalMosfet
 
  if(( powerElatricalMosfet_2 <= (powerElatricalMosfet_1 - percentage_mosfet_1 )) ||
       powerElatricalMosfet_2 >= (powerElatricalMosfet_1 + percentage_mosfet_1 )){
        calculate_eletrical_power = false
  } else {
    calculate_eletrical_power = true
  }
  return {
    calculateEletricalPower: calculate_eletrical_power
  }
  
}

