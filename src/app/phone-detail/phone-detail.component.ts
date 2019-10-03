import { Phone, PhoneData } from "../core/phone";
import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { RouteParams } from '../ajs-upgraded-providers';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html'
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(routeParams: RouteParams, phone: Phone) {
    let phoneId = routeParams['phoneId'];
    phone.get(phoneId).subscribe(phone => {
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