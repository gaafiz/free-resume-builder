import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

@Component({
  selector: 'app-edit-content-tab',
  templateUrl: './edit-content-tab.component.html',
  styleUrls: ['./edit-content-tab.component.scss']
})
export class EditContentTabComponent implements OnInit {
  @Input() inputJsonResume: any;
  @Input() inputTemplateConfig: any;
  @Output() public userJsonResumeChanged = new EventEmitter<any>();
  @Output() public userTemplateConfChanged = new EventEmitter<any>();
  @ViewChild('ckeditor') ckeditor: CKEditorComponent;

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
        this.userJsonResumeChanged.emit(JSON.parse(fileAsText));
      }
      fileReader.onerror = (error) => {
        console.log(error);
      }
      event.target.value = '';
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
          this.userTemplateConfChanged.emit(JSON.parse(fileAsText));
        }
        fileReader.onerror = (error) => {
          console.log(error);
        }

        event.target.value = '';
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
    let resume = this.inputJsonResume;
    this.downloadObjectAsJson(resume, "jsonResumeContent");
  }

  downloadTemplateConfig() {
    let templateConf = this.inputTemplateConfig;
    this.downloadObjectAsJson(templateConf, "resumeTemplateConfig");
  }

  removeProfile(profile) {
    let idx = this.inputJsonResume.basics.profiles.indexOf(profile)
    if (idx !== -1) {
      this.inputJsonResume.basics.profiles.splice(idx, 1);
    }
  }
  addNewProfile() {
    this.inputJsonResume.basics.profiles.push({
      "network": "network",
      "username": "username",
      "url": "Link",
    })
  }

  config: any = {
      allowedContent: true,
      toolbar: [['Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList', 'Link', '-', 'CreatePlaceholder']],
      removePlugins: 'elementspath',
      resize_enabled: false,
      extraPlugins: 'font,divarea,placeholder',
      contentsCss: ["body {font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;}"],
      autoParagraph: false,
      enterMode: 2
    };

}
