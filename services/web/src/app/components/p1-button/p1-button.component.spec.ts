import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1ButtonComponent } from './p1-button.component';

describe('P1ButtonComponent', () => {
  let component: P1ButtonComponent;
  let fixture: ComponentFixture<P1ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
