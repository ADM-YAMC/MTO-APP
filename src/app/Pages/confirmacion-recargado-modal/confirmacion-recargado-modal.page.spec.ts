import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmacionRecargadoModalPage } from './confirmacion-recargado-modal.page';

describe('ConfirmacionRecargadoModalPage', () => {
  let component: ConfirmacionRecargadoModalPage;
  let fixture: ComponentFixture<ConfirmacionRecargadoModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionRecargadoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmacionRecargadoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
