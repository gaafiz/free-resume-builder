import { Component } from '@angular/core';
import { resume } from '../assets/jsonResumeSample';
import { templateLayoutConfig } from '../assets/resumeTemplateConfig';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'free-resume-builder';
  jsonResume = resume;
  templateLayoutConfig = templateLayoutConfig;

  updateJsonResume(newJsonResume) {
    this.jsonResume = newJsonResume;
  }

  updateTemplateLayoutConfig(newLayoutConf) {
    this.templateLayoutConfig = newLayoutConf;
  }

}
