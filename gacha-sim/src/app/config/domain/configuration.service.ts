import { Injectable } from '@angular/core';
import { windowToggle } from 'rxjs';
import { Configuration } from './configuration';
import { GachaType } from './gacha-type';
import { Prize } from './prize';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  config: Configuration;

  constructor() {
    let config = JSON.parse(window.localStorage.getItem('gacha-config')!);

    if(config != null) {
      this.config = config;
    } else {
      this.config = new Configuration();
      this.config.prizes.push(new Prize("Test", 5.0));
    }
  }

  load(): Configuration {
    return this.config;
  }

  save(config: Configuration) {
    this.config = config;
    window.localStorage.setItem('gacha-config', JSON.stringify(this.config));
  }
}
