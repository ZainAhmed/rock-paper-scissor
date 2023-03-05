import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { WeaponButtonComponent } from './components/weapon-button/weapon-button.component';
import { HeaderComponent } from './components/header/header.component';
import { DisplayScoreComponent } from './components/display-score/display-score.component';
import { MatchCompletionDialogComponent } from './components/match-completion-dialog/match-completion-dialog.component'
@NgModule({
  declarations: [
    AppComponent,
    WeaponButtonComponent,
    HeaderComponent,
    DisplayScoreComponent,
    MatchCompletionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
