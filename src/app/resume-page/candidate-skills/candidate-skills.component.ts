import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-candidate-skills',
  templateUrl: './candidate-skills.component.html',
  styleUrls: ['./candidate-skills.component.scss']
})
export class CandidateSkillsComponent implements OnInit {
  @Input() jsonResume: any;
  @Input() templateConf: any;

  constructor() { }

  ngOnInit(): void { }

  showTitle() {
    let title = this.title();
    return title != undefined && title !== "";
  }

  title() {
     return this.templateConf?.sections?.skills?.title;
  }

  showSection() {
    let skills = this.skills();
    return skills != undefined && skills.length > 0;
  }

  skills() {
    return this.jsonResume?.skills;
  }

}
