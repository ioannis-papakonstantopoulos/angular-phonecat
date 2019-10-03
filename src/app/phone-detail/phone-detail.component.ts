import { Phone, PhoneData } from "../core/phone";

class PhoneDetailController {
  phone: PhoneData;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'Phone'];
  constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
    let phoneId = $routeParams['phoneId'];
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
  component('phoneDetail', {
    template: require('html-loader!./phone-detail.template.html'),
    controller: PhoneDetailController
  });