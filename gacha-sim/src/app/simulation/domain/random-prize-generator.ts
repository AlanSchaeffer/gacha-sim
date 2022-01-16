import { Configuration } from "src/app/config/domain/configuration";
import { PrizeNumber } from "./prize-number";

export class RandomPrizeGenerator {

    constructor(private config: Configuration) { }

    generate(): PrizeNumber[] {
        let max = this.config.gachaPrecision;
        let result: PrizeNumber[] = [];
        let consumed: number[] = [];
        let remaining = max;

        for(let prize of this.config.prizes) {
            let allocation = Math.round(max * prize.rate / 100);
            if(allocation > remaining) allocation = remaining;
            
            for(let i = 1; i <= allocation; i++) {
                let base = Math.floor(Math.random() * max);
                let rng = base;

                while(consumed.includes(rng)) {
                    rng++;
                    if(rng > max) rng = 0;
                    if(rng == base) throw new Error("Infinite loop! rng incremented and looped back to itself");
                }

                consumed.push(rng);
                result.push(new PrizeNumber(prize, rng));
            }

            remaining -= allocation;
            if(remaining <= 0) break; 
        }

        return result;
    }
}