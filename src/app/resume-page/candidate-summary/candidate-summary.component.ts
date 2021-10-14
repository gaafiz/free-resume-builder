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

  summary() {
    return this.jsonResume?.basics?.summary;
  }

  title() {
    return this.templateConf?.sections?.summary?.title
  }

}
