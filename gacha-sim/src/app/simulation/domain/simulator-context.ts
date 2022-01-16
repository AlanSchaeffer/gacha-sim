import { Configuration } from "src/app/config/domain/configuration";
import { SimulatorResult } from "./simulator-result";

export class SimulatorContext {

    config: Configuration;
    results: SimulatorResult[] = [];

    constructor(config: Configuration) {
        this.config = config;
    }

    addResult(result: SimulatorResult): void {
        this.results.push(result);
    }

    clear(): void {
        this.results = [];
    }
}