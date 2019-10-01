import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

import 'angular';
import 'angular-animate';
import 'angular-resource';
import 'jquery';

import 'zone.js/dist/zone';

import './core/core.module';
import './core/phone/phone.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.module';
import './app.config';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
