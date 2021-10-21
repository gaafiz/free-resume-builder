import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-resume-version',
  templateUrl: './resume-version.component.html',
  styleUrls: ['./resume-version.component.scss']
})
export class ResumeVersionComponent implements OnInit {
  @Input() jsonResume: any;
  @Input() templateConf: any;

  constructor() { }

  ngOnInit(): void {
  }

  showSection() {
      let version = this.version();
      return version != undefined && version !== "";
  }

  version() {
    return this.jsonResume?.version;
  }

}
