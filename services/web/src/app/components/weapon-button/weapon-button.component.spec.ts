import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponButtonComponent } from './weapon-button.component';

describe('WeaponButtonComponent', () => {
  let component: WeaponButtonComponent;
  let fixture: ComponentFixture<WeaponButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
