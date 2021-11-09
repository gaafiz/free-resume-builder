import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';


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
import { CandidateLanguagesComponent } from './resume-page/candidate-languages/candidate-languages.component';
import { CandidateExperienceComponent } from './resume-page/candidate-experience/candidate-experience.component';
import { CandidateEducationComponent } from './resume-page/candidate-education/candidate-education.component';
import { ResumeVersionComponent } from './resume-page/resume-version/resume-version.component';
import { SectionSeparatorComponent } from './section-separator/section-separator.component';
import { EditBasicInfoComponent } from './edit-content-tab/edit-basic-info/edit-basic-info.component';
import { EditExperienceInfoComponent } from './edit-content-tab/edit-experience-info/edit-experience-info.component';
import { EditEducationInfoComponent } from './edit-content-tab/edit-education-info/edit-education-info.component';
import { EditLayoutTabComponent } from './edit-layout-tab/edit-layout-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    EditContentTabComponent,
    CandidatePhotoComponent,
    CandidatePersonalInfoComponent,
    CandidateLabelingComponent,
    CandidateSummaryComponent,
    CandidateSkillsComponent,
    CandidateLanguagesComponent,
    CandidateExperienceComponent,
    CandidateEducationComponent,
    ResumeVersionComponent,
    SectionSeparatorComponent,
    EditBasicInfoComponent,
    EditExperienceInfoComponent,
    EditEducationInfoComponent,
    EditLayoutTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
