/// <reference lib="webworker" />

import { Prize } from "src/app/config/domain/prize";
import { Simulation } from "../domain/simulation";
import { SimulatorResult } from "../domain/simulator-result";
import { SimulatorResultPrize } from "../domain/simulator-result-prize";

addEventListener('message', ({ data }) => {
  let simulation = data as Simulation;
  let result = new SimulatorResult(simulation.playerId);
  let remainingPrizes = [...simulation.config.prizes];

  while(remainingPrizes.length > 0) {
    result.totalPulls++;

    let prize = pull(simulation);

    if(prize) {
      remainingPrizes = remainingPrizes.filter((p) => p != prize);
      result.addPrize(new SimulatorResultPrize(prize.name, prize.rate, result.totalPulls));
    }

    if(result.totalPulls > 1_000_000) {
      console.log("too many...");
      break;
    }
  }

  postMessage(result);
});

function pull(simulation: Simulation): Prize | undefined {
  let rng = Math.floor(Math.random() * simulation.config.gachaPrecision);

  return simulation.prizedNums.find((v) => v.num == rng)?.prize;
}