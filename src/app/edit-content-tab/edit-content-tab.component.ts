import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-edit-content-tab',
  templateUrl: './edit-content-tab.component.html',
  styleUrls: ['./edit-content-tab.component.scss']
})
export class EditContentTabComponent implements OnInit {
  userJsonResume : any;
  userTemplateConf : any;
  @Input() inputJsonResume: any;
  @Input() inputTemplateConfig: any;
  @Output() public userJsonResumeChanged = new EventEmitter<any>();
  @Output() public userTemplateConfChanged = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onContentFileChanged(event) {
    const files = event.target.files
    if (files.length >= 1 ) {
      const selectedFile = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsText(selectedFile, "UTF-8");
      fileReader.onload = () => {
        const fileAsText = fileReader.result as string;
        this.userJsonResume = JSON.parse(fileAsText);
        this.userJsonResumeChanged.emit(this.userJsonResume);
      }
      fileReader.onerror = (error) => {
        console.log(error);
      }
    }
  }

  onConfFileChanged(event) {
      const files = event.target.files
      if (files.length >= 1 ) {
        const selectedFile = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsText(selectedFile, "UTF-8");
        fileReader.onload = () => {
          const fileAsText = fileReader.result as string;
          this.userTemplateConf = JSON.parse(fileAsText);
          this.userTemplateConfChanged.emit(this.userJsonResume);
        }
        fileReader.onerror = (error) => {
          console.log(error);
        }
      }
    }

  downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  downloadJsonResumeContent() {
    let resume = this.userJsonResume || this.inputJsonResume;
    this.downloadObjectAsJson(resume, "jsonResumeContent");
  }

  downloadTemplateConfig() {
    let templateConf = this.userTemplateConf || this.inputTemplateConfig;
    this.downloadObjectAsJson(templateConf, "resumeTemplateConfig");
  }

}
