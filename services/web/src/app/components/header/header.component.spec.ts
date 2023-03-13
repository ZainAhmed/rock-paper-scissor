import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { DisplayScoreComponent } from '../display-score/display-score.component';
import { MatchCompletionDialogComponent } from '../match-completion-dialog/match-completion-dialog.component';
import { WeaponButtonComponent } from '../weapon-button/weapon-button.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        FontAwesomeModule,
        FlexLayoutModule,
        MatGridListModule,
        MatDividerModule,
        MatDialogModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        WeaponButtonComponent,
        HeaderComponent,
        DisplayScoreComponent,
        MatchCompletionDialogComponent
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('updateComScore', () => {
    expect(component).toBeTruthy();
    expect(component.comScores[2]).toBe(0)
    component.updateComScore()
    expect(component.comScores[2]).toBe(1)
    expect(component.comScores[1]).toBe(0)
    component.updateComScore()
    expect(component.comScores[1]).toBe(1)
  });

  

  it('updateP1Score', () => {
    expect(component).toBeTruthy();
    expect(component.p1Scores[0]).toBe(0)
    component.updateP1Score()
    expect(component.p1Scores[0]).toBe(1)
    expect(component.p1Scores[1]).toBe(0)
    component.updateP1Score()
    expect(component.p1Scores[1]).toBe(1)
  });
});
