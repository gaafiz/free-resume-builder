import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-candidate-labeling',
  templateUrl: './candidate-labeling.component.html',
  styleUrls: ['./candidate-labeling.component.scss']
})
export class CandidateLabelingComponent implements OnInit {
  @Input() jsonResume: any;
  @Input() templateConf: any;

  constructor() { }

  ngOnInit(): void {
  }

  candidateName() {
    return this.jsonResume?.basics?.name;
  }

  showCandidateLabel() {
    return this.jsonResume?.basics?.label != undefined;
  }

  candidateLabel() {
    return this.jsonResume?.basics?.label;
  }

}
