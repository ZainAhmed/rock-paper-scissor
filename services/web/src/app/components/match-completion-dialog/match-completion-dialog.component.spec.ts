import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCompletionDialogComponent } from './match-completion-dialog.component';

describe('MatchCompletionDialogComponent', () => {
  let component: MatchCompletionDialogComponent;
  let fixture: ComponentFixture<MatchCompletionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchCompletionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchCompletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
