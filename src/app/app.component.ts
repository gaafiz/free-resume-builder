import { Component } from '@angular/core';
import { resume } from '../assets/jsonResumeSample';
import { templateConfigs } from '../assets/resumeTemplateConfig';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'free-resume-builder';
  jsonResume = resume;
  templateConf = templateConfigs;

  updateJsonResume(newJsonResume) {
    this.jsonResume = newJsonResume;
  }

  updateTemplateConf(newTemplateConf) {
      this.templateConf = newTemplateConf;
    }

}
