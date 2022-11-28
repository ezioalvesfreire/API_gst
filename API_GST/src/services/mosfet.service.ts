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

  if ((resistanceDraiSource_1 > resistanceDraiSource_2) && (resistanceDraiSource_2 < (resistanceDraiSource_1 - percentage_1)) ||
    (resistanceDraiSource_1 < resistanceDraiSource_2) && (resistanceDraiSource_1 < (resistanceDraiSource_2 - percentage_2))
  ) {
    return {
      checkResistanceDrainSource: false
    }
  }

}

