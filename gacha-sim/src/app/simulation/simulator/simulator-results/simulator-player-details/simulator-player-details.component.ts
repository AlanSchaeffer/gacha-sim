import { Component, Input, OnInit } from '@angular/core';
import { SimulatorResult } from 'src/app/simulation/domain/simulator-result';
import { SimulatorResultPrize } from 'src/app/simulation/domain/simulator-result-prize';

@Component({
  selector: 'app-simulator-player-details',
  templateUrl: './simulator-player-details.component.html',
  styleUrls: ['./simulator-player-details.component.css']
})
export class SimulatorPlayerDetailsComponent implements OnInit {

  private _result: SimulatorResult;
  private _totalPrizes: SimulatorTotal[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  @Input() set result(value: SimulatorResult) {
    this._result = value;
    this._totalPrizes = this.updateTotalPrizes();
  }

  get result() {
    return this._result;
  }

  get totalPrizes() {
    return this._totalPrizes;
  }

  private updateTotalPrizes(): SimulatorTotal[] {
    if(this.result) {
      const groupedMap = this.result.prizes.reduce((entryMap, e) => entryMap.set(e.name, [...entryMap.get(e.name)||[], e]),
                                                    new Map<string, SimulatorResultPrize[]>());

      return Array.from(groupedMap)
                  .map(entry => new SimulatorTotal(entry[0], entry[1].length));
    }
    return [];
  }
}

class SimulatorTotal {
  constructor(
    public name: string,
    public times: number
  ){}
}