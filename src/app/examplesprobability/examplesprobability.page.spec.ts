import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamplesprobabilityPage } from './examplesprobability.page';

describe('ExamplesprobabilityPage', () => {
  let component: ExamplesprobabilityPage;
  let fixture: ComponentFixture<ExamplesprobabilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesprobabilityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamplesprobabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
