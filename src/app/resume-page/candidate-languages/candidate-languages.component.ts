import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-candidate-languages',
  templateUrl: './candidate-languages.component.html',
  styleUrls: ['./candidate-languages.component.scss']
})
export class CandidateLanguagesComponent implements OnInit {
  @Input() jsonResume: any;
  @Input() templateConf: any;

  constructor() { }

  ngOnInit(): void {
  }

  showTitle() {
    let title = this.title();
    return title != undefined && title !== "";
  }

  title() {
     return this.templateConf?.sections?.languages?.title;
  }

  showSection() {
    let languages = this.languages();
    return languages != undefined && languages.length > 0;
  }

  languages() {
    return this.jsonResume?.languages;
  }

}
