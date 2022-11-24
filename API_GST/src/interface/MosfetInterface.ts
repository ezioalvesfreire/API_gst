/*export interface MosfetInterface {
        id_mosfet?: number;
        descript1: Text;
        descript2: Text;
        pack?: Text;
        ch?: Text;
        drainCurreunt?: number;
        voltageDrainSource?: number;
        resistanceDraiSource?: number;
} 
*/

export interface MosfetInterface {
        id_mosfet?:number;

        descriptionMosfet_1: Text;        
        channelMosfet_1?: Text;      
        packageMosfet_1?: Text;        
        drainCurrent_1?: number;       
        voltageDrainSource_1?: number;        
        resistanceDraiSource_1?: number;
        

        descriptionMosfet_2: Text;
        channelMosfet_2?: Text;
        packageMosfet_2?: Text;
        drainCurrent_2?: number;
        voltageDrainSource_2?: number;
        resistanceDraiSource_2?: number;
}