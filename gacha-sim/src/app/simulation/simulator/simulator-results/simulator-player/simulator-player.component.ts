import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalConfigurator } from 'src/app/modal/modal-configurator';
import { ModalRequest } from 'src/app/modal/modal-request';
import { ModalService } from 'src/app/modal/modal.service';
import { SimulatorResult } from 'src/app/simulation/domain/simulator-result';
import { SimulatorPlayerDetailsComponent } from '../simulator-player-details/simulator-player-details.component';

@Component({
  selector: 'app-simulator-player',
  templateUrl: './simulator-player.component.html',
  styleUrls: ['./simulator-player.component.css']
})
export class SimulatorPlayerComponent implements OnInit {

  @Input() result: SimulatorResult;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  showDetails(): void {
    const config = new ModalConfigurator(SimulatorPlayerDetailsComponent
                                        , comp => comp.instance.result = this.result);
    const request = new ModalRequest("Player " + this.result.id, config, "Gacha results");
    this.modalService.display(request);
  }
}
