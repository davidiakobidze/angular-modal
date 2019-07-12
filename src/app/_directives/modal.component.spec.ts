import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ModalComponent} from './modal.component';
import {ModalService} from '../_services';
import {By} from '@angular/platform-browser';

describe('ModalComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                ModalComponent
            ],
            providers: [
                ModalService
            ]
        }).compileComponents();
    }));

    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;


    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
    });



    it('should create modal component', () => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });



});
