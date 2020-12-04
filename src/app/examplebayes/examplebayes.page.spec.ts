import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamplebayesPage } from './examplebayes.page';

describe('ExamplebayesPage', () => {
  let component: ExamplebayesPage;
  let fixture: ComponentFixture<ExamplebayesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplebayesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamplebayesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
