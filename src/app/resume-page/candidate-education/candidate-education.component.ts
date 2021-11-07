import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-candidate-education',
  templateUrl: './candidate-education.component.html',
  styleUrls: ['./candidate-education.component.scss']
})
export class CandidateEducationComponent implements OnInit {
  @Input() jsonResume: any;
  @Input() templateConf: any;
  @Input() side: any;

  constructor() { }

  ngOnInit(): void {
  }

  showTitle() {
    let title = this.title();
    return title != undefined && title !== "";
  }

  title() {
     return this.templateConf?.sections?.education?.title;
  }

  showSection() {
    let educationList = this.educationList();
    return educationList != undefined && (educationList as any).length > 0;
  }

  nonEmpty(s) {
    return s != undefined && s !== '';
  }

  educationList() {
    let educationList = this.jsonResume?.education;
    let hasEdu = educationList != undefined && (educationList as any).length > 0;
    let eduItems = [];
    if (hasEdu) {
      educationList.forEach( eduItem => {
        var name = eduItem.area;
        if (this.nonEmpty(eduItem.studyType)) {
          name = eduItem.studyType + ': ' + name;
        }
        var institution = eduItem.institution;
        if (this.nonEmpty(eduItem.url)) {
          institution = institution + ' | ' + eduItem.url;
        }
        var period = "";
        if (eduItem.startDate && eduItem.startDate != "") {
          period = eduItem.startDate + ' - ' + (eduItem.endDate || 'Present');
        }
        var address = "";
        if (this.nonEmpty(eduItem.address)) {
          address = eduItem.address;
        }

        var addressAndPeriod = "";
        var addressAndPeriodSeparator = "";
        if (address != "" && period != "") {
          addressAndPeriodSeparator = " | ";
        }
        addressAndPeriod = address + addressAndPeriodSeparator + period
        let middleSeparator = "";
        if (institution != "" && addressAndPeriod != "") {
          middleSeparator = " | "
        }
        let head = institution + middleSeparator + addressAndPeriod;

        let score = eduItem.score;
        let info = eduItem.info;

        (eduItems as any).push({
            name: name,
            head: head,
            institution: institution,
            addressAndPeriod: addressAndPeriod,
            score: score,
            info: info,
        })
      })
    }
    return eduItems;
  }

}
