import { Phone, PhoneData } from "../core/phone";
import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { RouteParams } from '../ajs-upgraded-providers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html'
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(activatedRoute: ActivatedRoute, phone: Phone) {
    let phoneId = activatedRoute.snapshot.paramMap.get('phoneId');
    phone.get(phoneId).subscribe((phone: PhoneData) => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

angular.
  module('phoneDetail').
  directive('phoneDetail', downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory);