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
        descript1: Text;
        descript2: Text;
        ch1?: Text;
        ch2?: Text;
        pack1?: Text;
        pack2?: Text;
        drainCurreunt1?: number;
        drainCurreunt2?: number;
        voltageDrainSource1?: number;
        voltageDrainSource2?: number;
        resistanceDraiSource1?: number;
        resistanceDraiSource2?: number;
} 