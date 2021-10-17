import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-candidate-summary',
  templateUrl: './candidate-summary.component.html',
  styleUrls: ['./candidate-summary.component.scss']
})
export class CandidateSummaryComponent implements OnInit {
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
    return this.templateConf?.sections?.summary?.title;
  }

  showSection() {
    let summary = this.summary();
    return summary != undefined && summary !== "";
  }

  summary() {
    return this.jsonResume?.basics?.summary;
  }



}
