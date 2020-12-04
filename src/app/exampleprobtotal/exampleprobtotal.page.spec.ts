import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExampleprobtotalPage } from './exampleprobtotal.page';

describe('ExampleprobtotalPage', () => {
  let component: ExampleprobtotalPage;
  let fixture: ComponentFixture<ExampleprobtotalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleprobtotalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleprobtotalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
