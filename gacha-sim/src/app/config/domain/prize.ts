export class Prize {
    readonly name: string;
    readonly rate: number;

    constructor(name: string, rate: number) {
        this.name = name;
        this.rate = rate;
    }
}