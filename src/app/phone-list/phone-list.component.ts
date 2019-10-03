import { PhoneData, Phone } from "../core/phone";

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;
  query: string;

  static $inject = ['Phone'];
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

}

angular.
  module('phoneList').
  component('phoneList', {
    template: require('html-loader!./phone-list.template.html'),
    controller: PhoneListController
  });