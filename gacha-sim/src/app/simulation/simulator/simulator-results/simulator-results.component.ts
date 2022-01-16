import { Component, Input, OnInit } from '@angular/core';
import { SimulatorContext } from '../../domain/simulator-context';

@Component({
  selector: 'app-simulator-results',
  templateUrl: './simulator-results.component.html',
  styleUrls: ['./simulator-results.component.css']
})
export class SimulatorResultsComponent implements OnInit {

  @Input() context: SimulatorContext;

  constructor() { }

  ngOnInit(): void {
  }

}
