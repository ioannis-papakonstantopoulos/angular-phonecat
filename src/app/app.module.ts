import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from './core/phone';
import { FormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list';
import { PhoneDetailComponent } from './phone-detail';
import { routeParamsProvider } from './ajs-upgraded-providers';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  entryComponents: [
    PhoneListComponent,
    PhoneDetailComponent
  ],
  providers: [
    Phone,
    routeParamsProvider
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}