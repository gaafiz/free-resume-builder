import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditContentTabComponent } from './edit-content-tab/edit-content-tab.component';
import { CandidatePhotoComponent } from './resume-page/candidate-photo/candidate-photo.component';
import { CandidatePersonalInfoComponent } from './resume-page/candidate-personal-info/candidate-personal-info.component';
import { CandidateLabelingComponent } from './resume-page/candidate-labeling/candidate-labeling.component';
import { CandidateSummaryComponent } from './resume-page/candidate-summary/candidate-summary.component';
import { CandidateSkillsComponent } from './resume-page/candidate-skills/candidate-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    EditContentTabComponent,
    CandidatePhotoComponent,
    CandidatePersonalInfoComponent,
    CandidateLabelingComponent,
    CandidateSummaryComponent,
    CandidateSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
