import { Component, OnInit } from '@angular/core';
import { Configuration } from '../config/domain/configuration';
import { ConfigurationService } from '../config/domain/configuration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  configuration: Configuration;

  constructor(
    configurationService: ConfigurationService
  ) {
    this.configuration = configurationService.load();
  }

  ngOnInit(): void {
  }

}
