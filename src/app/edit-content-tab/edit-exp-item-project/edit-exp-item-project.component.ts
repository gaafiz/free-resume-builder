import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-edit-exp-item-project',
  templateUrl: './edit-exp-item-project.component.html',
  styleUrls: ['../edit-content-tab.component.scss']
})
export class EditExpItemProjectComponent implements OnInit {
  @Input() projects: any;
  projectsChunks : any = [[]];

  constructor() { }

  ngOnInit(): void {
    this.projectsChunks = this.arrayChunks(this.projects, 2);
  }

  arrayChunks(inputArray, perChunk) {
    if (inputArray == undefined || inputArray.length == 0) {
      return [];
    }

    var result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index/perChunk)

      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])

    return result;
  }

  removeItem(arr, item) {
      let idx = arr.indexOf(item)
      if (idx !== -1) {
        arr.splice(idx, 1);
      }
    }

  removeProject(project) {
    this.removeItem(this.projects, project);
    this.projectsChunks = this.arrayChunks(this.projects, 2);
  }

    config: any = {
        allowedContent: true,
        toolbar: [['Bold', 'Italic', 'Underline', '-', 'BulletedList', 'NumberedList', 'Link', '-', 'Table', 'Image', '-', 'Source']],
        removePlugins: 'elementspath',
        resize_enabled: true,
        extraPlugins: 'font, divarea',
        contentsCss: ["body {font-family: arial, sans-serif;}"],
        autoParagraph: false,
        enterMode: 2,
        height: 75
      };
}
