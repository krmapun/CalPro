import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcuprototalPage } from './calcuprototal.page';

describe('CalcuprototalPage', () => {
  let component: CalcuprototalPage;
  let fixture: ComponentFixture<CalcuprototalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcuprototalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcuprototalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
