import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prizes-list',
  templateUrl: './prizes-list.component.html',
  styleUrls: ['./prizes-list.component.css']
})
export class PrizesListComponent implements OnInit {

  @Input() formGroup: FormGroup
  prizesForm: FormArray;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.prizesForm = this.formGroup.get('prizes') as FormArray;
  }

  addPrize(): void {
    this.prizesForm.push(this.createItem());
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      rate: ''
    });
  }

  asGroup(prize: AbstractControl): FormGroup {
    return prize as FormGroup;
  }

  deleteItem(item: FormGroup): void {
    let index = this.prizesForm.controls.indexOf(item);
    this.prizesForm.removeAt(index);
  }
}
