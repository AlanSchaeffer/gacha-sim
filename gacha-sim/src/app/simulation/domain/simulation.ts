import { Configuration } from "src/app/config/domain/configuration";
import { PrizeNumber } from "./prize-number";

export class Simulation {
    constructor(
        public playerId: number, 
        public config: Configuration,
        public prizedNums: PrizeNumber[]
    ) { 

    }
}