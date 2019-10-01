import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { NgModule } from '@angular/core';

import { routeParamsProvider } from './ajs-upgraded-providers';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';
import { Phone } from './core/phone/phone.service';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

import phonecatApp from './app.module.ajs';

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpClientModule, FormsModule],
  declarations: [PhoneListComponent, PhoneDetailComponent, CheckmarkPipe],
  entryComponents: [PhoneListComponent, PhoneDetailComponent],
  providers: [Phone, routeParamsProvider],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    console.log('Bootstrapping AngularJS phonecatApp...');
    this.upgrade.bootstrap(document.body, [phonecatApp], { strictDi: true });
  }
}
