import { Prize } from "src/app/config/domain/prize";

export class PrizeNumber {
    constructor(
        public prize: Prize,
        public num: number
    ) {
    }
}