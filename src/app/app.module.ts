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

@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    EditContentTabComponent,
    CandidatePhotoComponent,
    CandidatePersonalInfoComponent
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
