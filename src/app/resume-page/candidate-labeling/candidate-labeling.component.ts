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
  @Input() side: any;

  constructor() { }

  ngOnInit(): void {
  }

  showSection() {
    let name = this.candidateName();
    return name != undefined && name !== "";
  }

  candidateName() {
    return this.jsonResume?.basics?.name;
  }

  showCandidateLabel() {
    let candidateLabel = this.candidateLabel();
    return candidateLabel != undefined && candidateLabel !== "";
  }

  candidateLabel() {
    return this.jsonResume?.basics?.label;
  }

}
