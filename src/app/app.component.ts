import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'free-resume-builder';
  resumeJsonContent: JSON;
  resumeJsonContentString = ""

  updateJsonResume(newJsonResume) {
    this.resumeJsonContent = newJsonResume;
    this.resumeJsonContentString = JSON.stringify(this.resumeJsonContent);
  }

}
