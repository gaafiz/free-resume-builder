import { Component } from '@angular/core';
import { resume } from '../assets/jsonResumeSample';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'free-resume-builder';
  resumeJsonContent = resume;
  resumeJsonContentString = ""

  updateJsonResume(newJsonResume) {
    this.resumeJsonContent = newJsonResume;
    this.resumeJsonContentString = JSON.stringify(this.resumeJsonContent);
  }

}
