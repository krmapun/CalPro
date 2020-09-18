import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamplescomPage } from './examplescom.page';

describe('ExamplescomPage', () => {
  let component: ExamplescomPage;
  let fixture: ComponentFixture<ExamplescomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplescomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamplescomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
