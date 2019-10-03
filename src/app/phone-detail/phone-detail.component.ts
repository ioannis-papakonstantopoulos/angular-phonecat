
class PhoneDetailController {
  phone: any;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'Phone'];
  constructor($routeParams, Phone: any) {
    let phoneId = $routeParams['phoneId'];
    Phone.get(phoneId).then(phone => {
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