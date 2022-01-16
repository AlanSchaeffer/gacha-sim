import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalRequest } from './modal-request';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private displayComponent = new Subject<ModalRequest>();
  displayComponentObservable = this.displayComponent.asObservable();

  constructor() { }

  display(request: ModalRequest) {
    this.displayComponent.next(request);
  }
}
