import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import 'src/assets/js/common';

@Component({
  selector: 'app-candidate-experience',
  templateUrl: './candidate-experience.component.html',
  styleUrls: ['./candidate-experience.component.scss']
})
export class CandidateExperienceComponent implements OnInit {
  @Input() jsonResume: any;
  @Input() templateConf: any;
  @Input() side: any;
  commonJs = _commonJs

  constructor() { }

  ngOnInit(): void {
  }

  showTitle() {
    let title = this.title();
    return title != undefined && title !== "";
  }

  title() {
     return this.templateConf?.sections?.experience?.title;
  }

  showSection() {
    let experiences = this.experiences();
    return experiences != undefined && (experiences as any).length > 0;
  }

  experiences() {
    return this.jsonResume?.work;
  }

  hasProjects(expItem) {
    let projects = (expItem?.projects as any);
    return projects != undefined && projects.length > 0;
  }

  getExpHeadline(expItem) {
    return _commonJs.appendString(
      this.getCompanyNameAndWebsite(expItem),
      this.getCompanyAddressAndPeriod(expItem),
      " | "
    );
  }

  getCompanyNameAndWebsite(expItem) {
    return _commonJs.appendString(expItem.company, expItem.website, " | ");
  }

  getCompanyAddressAndPeriod(expItem) {
    let period = expItem.startDate + " - " + (expItem.endDate || 'Present');
    return _commonJs.appendString(expItem?.address, period, " | ");
  }

}
