import { GachaType } from "./gacha-type";
import { Prize } from "./prize";

export class Configuration {

    players: number = 1;
    gachaPrecision: number = 1_000_000;
    prizes: Prize[] = [];
    type: GachaType = GachaType.STACKED;

    add(prize: Prize) {
        let total = this.prizes.reduce((sum, current) => sum + current.rate, 0.0);
        if(total + prize.rate > 100.0) {
            throw new Error("Sum of rates above 100%!");
        }

        this.prizes.push(prize);
    }
}