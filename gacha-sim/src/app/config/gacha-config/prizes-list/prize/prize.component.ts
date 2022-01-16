import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {

  @Output() onDelete = new EventEmitter<FormGroup>();
  @Input() formGroup: FormGroup
  @Input() prize: any

  ngOnInit(): void {
  }

  remove(): void {
    this.onDelete.emit(this.prize);
  }
}
