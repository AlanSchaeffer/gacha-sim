import { Component, Input, OnInit } from '@angular/core';
import { Configuration } from 'src/app/config/domain/configuration';
import { ConfigurationService } from 'src/app/config/domain/configuration.service';
import { GachaType } from 'src/app/config/domain/gacha-type';
import { PrizeNumber } from '../domain/prize-number';
import { RandomPrizeGenerator } from '../domain/random-prize-generator';
import { Simulation } from '../domain/simulation';
import { SimulatorContext } from '../domain/simulator-context';
import { SimulatorResult } from '../domain/simulator-result';
import { StackedPrizeGenerator } from '../domain/stacked-prize-generator';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  running: boolean = false;
  configuration: Configuration;
  context: SimulatorContext;

  constructor(
    configurationService: ConfigurationService
  ) { 
    this.configuration = configurationService.load();
    this.context = new SimulatorContext(this.configuration);
  }

  ngOnInit(): void {
  }

  simulate(): void {
    if(this.running) return;

    this.running = true;
    
    if (typeof Worker !== 'undefined') {
      this.context.results = [];
      let players = this.configuration.players;
      let prizedNumbers =  this.createPrizedNumber(this.configuration);

      const worker = new Worker(new URL('./simulator.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.simulationConcluded(data);

        if(this.context.results.length == players) {
          worker.terminate();
          this.running = false;
        }
      };

      for(let p = 1; p <= players; p++) {
        worker.postMessage(new Simulation(p, this.configuration, prizedNumbers));
      }
    } else {
      console.log("Your browser sucks...");
      this.running = false;
    }
  }

  createPrizedNumber(config: Configuration): PrizeNumber[] {
    switch(config.type) {
        case GachaType.STACKED:
            return new StackedPrizeGenerator(config).generate();
        case GachaType.RANDOM:
            return new RandomPrizeGenerator(config).generate();
        default:
            throw new Error("Unknown type " + config.type);
    }
}

  simulationConcluded(result: SimulatorResult) {
    this.context.addResult(result);
  }
}

