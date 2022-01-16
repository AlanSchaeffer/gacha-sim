import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ConfigurationService } from '../domain/configuration.service';
import { Configuration } from '../domain/configuration';

@Component({
  selector: 'app-gacha-config',
  templateUrl: './gacha-config.component.html',
  styleUrls: ['./gacha-config.component.css']
})
export class GachaConfigComponent implements OnInit {

  configForm: FormGroup;

  constructor(
    private configurationService: ConfigurationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.configForm = this.formBuilder.group({
      players: '',
      gachaPrecision: '',
      type: '',
      prizes: this.formBuilder.array([])
    });

    let config = this.configurationService.load();
    this.configForm.patchValue(config);

    config.prizes.forEach(p => {
      let formArray = this.configForm.get('prizes') as FormArray;
      formArray.push(this.formBuilder.group(p));
    });
  }

  onSubmit(): void {
    let saving = this.configForm.value as Configuration;
    this.configurationService.save(saving);
  }
}
