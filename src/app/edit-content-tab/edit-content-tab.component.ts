import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-content-tab',
  templateUrl: './edit-content-tab.component.html',
  styleUrls: ['./edit-content-tab.component.scss']
})
export class EditContentTabComponent implements OnInit {
  userJsonResume: JSON;
  @Output() public onUserJsonResumeChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    const files = event.target.files
    if (files.length >= 1 ) {
      const selectedFile = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsText(selectedFile, "UTF-8");
      fileReader.onload = () => {
        const fileAsText = fileReader.result as string;
        this.userJsonResume = JSON.parse(fileAsText);
        this.onUserJsonResumeChanged.emit(this.userJsonResume);
      }
      fileReader.onerror = (error) => {
        console.log(error);
      }
    }
  }

}
