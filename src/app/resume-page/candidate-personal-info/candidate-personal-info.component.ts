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
  @Input() side: any;

  constructor() { }

  ngOnInit(): void {
  }

  title() {
    return this.templateConf?.sections?.personalInfo?.title
  }

  showSection() {
    let infoList = this.personalInfoList();
    return infoList != undefined && infoList.length > 0;
  }

  personalInfoList() {
    let personalInfoList = [];
    this.appendBirthday(personalInfoList, this.jsonResume);
    this.appendAddress(personalInfoList, this.jsonResume);
    this.appendNationality(personalInfoList, this.jsonResume);
    this.appendEmail(personalInfoList, this.jsonResume);
    this.appendPhoneNumber(personalInfoList, this.jsonResume);
    this.appendWebsite(personalInfoList, this.jsonResume);
    this.appendProfiles(personalInfoList, this.jsonResume);
    this.appendAttachments(personalInfoList, this.jsonResume);
    return personalInfoList;
  }

  appendAttachments(personalInfoList, jsonResume) {
    let attachments = jsonResume?.attachments;
    if (!!attachments) {
      attachments.forEach( doc => {

        var label = doc.label;
        if (label) {
          label = label + ": ";
        }
        let link = doc.link;
        let str = label + '<a>' + link + '</a>'
        personalInfoList.push({
          key: 'attachments',
          styleClass: 'fa fa-link',
          value: str
        });
      });
    }
  }

  appendProfiles(personalInfoList, jsonResume) {
    let profiles = jsonResume?.basics?.profiles;
    if (!!profiles) {
      profiles.forEach(profile => {
        let profileIconClass = this.getIconClassForNetwork(profile.network);
        if (!!profileIconClass) {
          personalInfoList.push({
            key: profile.network,
            styleClass: profileIconClass,
            value: profile.url || profile.username,
          });
        }
      });
    }
  }

  appendWebsite(personalInfoList, jsonResume) {
    let url = jsonResume?.basics?.url;
    if (!!url) {
        personalInfoList.push({
          key: 'website',
          styleClass: 'fa fa-globe-americas',
          value: url,
        });
    }
  }

  appendPhoneNumber(personalInfoList, jsonResume) {
    let phone = jsonResume?.basics?.phone;
    if (!!phone) {
        personalInfoList.push({
          key: 'phone',
          styleClass: 'fa fa-phone',
          value: phone,
        });
    }
  }

  appendEmail(personalInfoList, jsonResume) {
      let email = jsonResume?.basics?.email;
      if (!!email) {
          personalInfoList.push({
            key: 'email',
            styleClass: 'fa fa-envelope',
            value: email,
          });
      }
    }

  appendBirthday(personalInfoList, jsonResume) {
    let birthday = jsonResume?.basics?.birthday;
    if (!!birthday) {
      personalInfoList.push({
        key: 'birthday',
        styleClass: 'fa fa-birthday-cake',
        value: birthday,
      });
    }
  }

  appendNationality(personalInfoList, jsonResume) {
    let nationality = jsonResume?.basics?.nationality;
    if (!!nationality) {
      personalInfoList.push({
        key: 'nationality',
        styleClass: 'far fa-id-card',
        value: nationality,
      });
    }
  }

  appendAddress(personalInfoList, jsonResume) {
    let loc = jsonResume?.basics?.location;
    if (!!loc) {
      let locationParams = ['address', 'postalCode', 'city', 'region', 'countryCode'];
      let strWrapper = { str: ''};
      locationParams.forEach( locParam => {
        this.stringCatIfPossible(strWrapper, loc[locParam], ', ')
      });
      let addressString = strWrapper.str;
      if (addressString !== '') {
        personalInfoList.push({
          key: 'address',
          styleClass: 'fa fa-map-marker-alt',
          value: addressString
        });
      }
    }
  }

  stringCatIfPossible(strWrapper, toAppend, separator) {
    if (toAppend && toAppend !== '') {
      if (separator && strWrapper.str !== '') {
        strWrapper.str += separator;
      }
      strWrapper.str += toAppend;
    }
  }

  getIconClassForNetwork(networkName) {
    let networkIconMappingDic = {
      "linkedin": 'fab fa-linkedin',
      "github": 'fab fa-github',
      "facebook": 'fab fa-facebook',
      "youtube": 'fab fa-youtube',
      "stackoverflow": 'fab fa-stack-overflow',
    };
    let icon = networkIconMappingDic[networkName.toLowerCase()];
    return icon;
  }


}
