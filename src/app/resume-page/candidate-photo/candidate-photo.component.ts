import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-candidate-photo',
  templateUrl: './candidate-photo.component.html',
  styleUrls: ['./candidate-photo.component.scss']
})
export class CandidatePhotoComponent implements OnInit {
  @Input() jsonResume;

  constructor() {

  }

  ngOnInit(): void {
  }

  candidatePhoto() {
    return this.jsonResume?.basics?.image;
  }

}
