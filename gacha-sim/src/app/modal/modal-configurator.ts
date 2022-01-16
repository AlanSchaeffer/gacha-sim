import { ComponentRef, Type } from "@angular/core";

export class ModalConfigurator {

    constructor(
        public componentType: Type<any>,
        public initializeComponent: {(component: ComponentRef<any>): void} = c => {}
    ) {}
}