import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import  'src/assets/js/common';

@Component({
  selector: 'app-edit-basic-info',
  templateUrl: './edit-basic-info.component.html',
  styleUrls: ['../edit-content-tab.component.scss']
})
export class EditBasicInfoComponent implements OnInit {
  @Input() inputJsonResume: any;
  commonJs = _commonJs;


  constructor() { }

  ngOnInit(): void {
  }

  uploadPicture(event) {
    const files = event.target.files
    if (files.length >= 1 ) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type.includes('image')) {
        _commonJs.fileToBase64(selectedFile).then( data => {
          this.inputJsonResume.basics.image = data;
          event.target.value = '';
        });
      } else {
        alert("You can only select images to use as a personal photo");
      }
    }
  }

}
