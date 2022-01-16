import { Configuration } from "src/app/config/domain/configuration";
import { PrizeNumber } from "./prize-number";

export class StackedPrizeGenerator {

    constructor(private config: Configuration) { }

    generate(): PrizeNumber[] {
        let max = this.config.gachaPrecision;
        let remaining = max;
        let result: PrizeNumber[] = [];
        let last = 0;

        for(let prize of this.config.prizes) {
            let allocation = Math.round(max * prize.rate / 100);
            if(allocation > remaining) allocation = remaining;
            
            for(let i = 1; i <= allocation; i++) {
                result.push(new PrizeNumber(prize, last++));
            }

            remaining -= allocation;
            if(remaining <= 0) break; 
        }

        return result;
    }
}