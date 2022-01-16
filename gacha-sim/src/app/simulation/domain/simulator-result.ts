import { SimulatorResultPrize } from "./simulator-result-prize";

export class SimulatorResult {
    
    id: number;
    totalPulls: number = 0;
    prizes: SimulatorResultPrize[] = [];

    constructor(id: number) {
        this.id = id;
    }

    addPrize(prize: SimulatorResultPrize): void {
        this.prizes.push(prize);
    }
}