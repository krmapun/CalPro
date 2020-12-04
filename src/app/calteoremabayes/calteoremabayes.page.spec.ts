import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalteoremabayesPage } from './calteoremabayes.page';

describe('CalteoremabayesPage', () => {
  let component: CalteoremabayesPage;
  let fixture: ComponentFixture<CalteoremabayesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalteoremabayesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalteoremabayesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
