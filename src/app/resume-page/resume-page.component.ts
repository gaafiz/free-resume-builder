import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {

  @Input() jsonResume: any;
  @Input() templateConf: any;

  constructor() { }

  ngOnInit(): void {
  }

}
