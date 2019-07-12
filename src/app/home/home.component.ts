import { Component, OnInit } from '@angular/core';

import { ModalService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}
