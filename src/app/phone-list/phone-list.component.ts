// import './phone-list.template.html';

class PhoneListController {
  phones: any[];
  orderProp: string;
  query: string;

  static $inject = ['Phone'];
  constructor(Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }

}

angular.
  module('phoneList').
  component('phoneList', {
    // templateUrl: './phone-list.template.html',
    template: require('html-loader!./phone-list.template.html'),
    controller: PhoneListController
  });