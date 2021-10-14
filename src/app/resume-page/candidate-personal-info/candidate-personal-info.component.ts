import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-candidate-personal-info',
  templateUrl: './candidate-personal-info.component.html',
  styleUrls: ['./candidate-personal-info.component.scss']
})
export class CandidatePersonalInfoComponent implements OnInit {
  @Input() jsonResume: any;
  @Input() templateConf: any;

  constructor() { }

  ngOnInit(): void {
  }

  title() {
    return this.templateConf?.sections?.personalInfo?.title
  }

  contacts() {
    let contacts = [];
    this.addBirthdayToContacts(contacts, this.jsonResume);
    return contacts;
  }

  addBirthdayToContacts(contacts, jsonResume) {
    let birthday = jsonResume?.basics?.birthday;
    if (!!birthday) {
      contacts.push({
        key: 'birthday',
        styleClass: 'fa fa-birthday-cake',
        value: birthday,
      });
    }
  }

}
