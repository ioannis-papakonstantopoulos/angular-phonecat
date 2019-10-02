import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
      // console.log("1. AppModule:ngDoBootstrap() finished");
      
      this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
      
      // console.log("2. AppModule:ngDoBootstrap() finished");
  }
}