import { Type } from "@angular/core";
import { ModalConfigurator } from "./modal-configurator";

export class ModalRequest {
    constructor(
        public title: string,
        public modalConfigurator: ModalConfigurator,
        public footerText: string = ""
    ){}
}