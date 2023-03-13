import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySelectedWeaponComponent } from './display-selected-weapon.component';

describe('DisplaySelectedWeaponComponent', () => {
  let component: DisplaySelectedWeaponComponent;
  let fixture: ComponentFixture<DisplaySelectedWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySelectedWeaponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySelectedWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
