import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MontygamePage } from './montygame.page';

describe('MontygamePage', () => {
  let component: MontygamePage;
  let fixture: ComponentFixture<MontygamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontygamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MontygamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
