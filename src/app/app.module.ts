import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from './core/phone';
import { FormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list';


@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    PhoneListComponent
  ],
  entryComponents: [
    PhoneListComponent
  ],
  providers: [
    Phone,
  ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
      this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
  }
}