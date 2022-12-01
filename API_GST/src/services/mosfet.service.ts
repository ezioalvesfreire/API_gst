import { createMosfet } from '../controllers/mosfet.controller';


export function checkChannelMosfet(newMosfet: any) {


  if (newMosfet.channelMosfet_1 != newMosfet.channelMosfet_2) {
    let msg_mosfet_1_compatible = "Erro 1: O transistor " + newMosfet.channelMosfet_1 + " não é compatível com o transistor " + newMosfet.channelMosfet_2 + "";
    let msg_mosfet_2_compatible = "Erro 1: O transistor " + newMosfet.channelMosfet_2 + " não é compatível com o transistor " + newMosfet.channelMosfet_1 + "";
    return {

      checkChannelMosfet_1: false, mosfet_1_compatible: msg_mosfet_1_compatible, checkChannelMosfet_2: false, msgMosfet_2_compatible: msg_mosfet_2_compatible
    }
  }
}

export function checkResistanceDrainSource(newMosfet: any) {

  const resistanceDraiSource_1 = Number(newMosfet.resistanceDraiSource_1)
  const resistanceDraiSource_2 = Number(newMosfet.resistanceDraiSource_2)

  const varianceResistanceDraiSource = 30

  const percentage_1 = resistanceDraiSource_1 / 100 * varianceResistanceDraiSource
  const percentage_2 = resistanceDraiSource_2 / 100 * varianceResistanceDraiSource

  if ((resistanceDraiSource_1 > resistanceDraiSource_2) && (resistanceDraiSource_2 <= (resistanceDraiSource_1 - percentage_1)) ||
    (resistanceDraiSource_1 < resistanceDraiSource_2) && (resistanceDraiSource_1 <= (resistanceDraiSource_2 - percentage_2))
  ) {
    return {
      checkResistanceDrainSource: false
    }
  }

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
 // const percentage_mosfet_2 = powerElatricalMosfet_2 / 100 * variancePowerElatricalMosfet


  if(( powerElatricalMosfet_2 <= (powerElatricalMosfet_1 - percentage_mosfet_1 )) ||
       powerElatricalMosfet_2 >= (powerElatricalMosfet_1 + percentage_mosfet_1 )){
    return {
      calculateEletricalPower: false
    }
  }

  
}

export function convertResistanceDraiSourceToOhms(){

  
}