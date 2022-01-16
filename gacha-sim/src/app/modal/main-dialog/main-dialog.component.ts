import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalRequest } from '../modal-request';
import { ModalService as ModalService } from '../modal.service';

@Component({
  selector: 'app-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.css']
})
export class MainDialogComponent implements OnInit {

  @ViewChild('modal')
  modal: ElementRef;

  @ViewChild('dialogContent', {read: ViewContainerRef})
  container: ViewContainerRef;

  visible = false;
  title: string;
  footer: string;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalService.displayComponentObservable.subscribe(request => {
      if(this.visible) {
        this.hide();
      }

      this.title = request.title;
      this.footer = request.footerText;
      const component = this.container.createComponent(request.modalConfigurator.componentType);
      request.modalConfigurator.initializeComponent(component);

      this.show();
    });
  }

  ngAfterViewInit(): void {
    this.modal.nativeElement.addEventListener('click', (e: any) => {
      if(e.target.className === 'modal') {
        this.hide();
      }
    });
  }

  hide(): void {
    if(this.visible) {
      this.modal.nativeElement.style.display = "none";
      this.visible = false;
      this.container.clear();
    }
  }

  show(): void {
    if(this.visible) this.hide();

    this.modal.nativeElement.style.display = "block";
    this.visible = true;
  }
}
