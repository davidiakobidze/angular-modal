import {async, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from './home.component';
import {ModalService} from '../_services';
import {ModalComponent} from '../_directives';

describe('HomeComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                HomeComponent,
                ModalComponent
            ],
            providers: [
                ModalService
            ]
        }).compileComponents();
    }));
    it('should create home component', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should find open modal button', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const openEl = fixture.debugElement.query(By.css('#open'));
        expect(openEl).not.toBe(null);
    });
});


