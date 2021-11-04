import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-section-separator',
  templateUrl: './section-separator.component.html',
  styleUrls: ['./section-separator.component.scss']
})
export class SectionSeparatorComponent implements OnInit {
 @Input() text: string;
 @Input() fade: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showText() {
    return this.text != undefined && this.text != "";
  }

  fadeClass() {
    return this.fade ? 'fade' : "";
  }
}
