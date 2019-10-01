import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

import 'angular';
import 'angular-resource';
import 'angular-animate';
import 'jquery';
import 'angular-route';
import 'zone.js/dist/zone';

import './core/phone/phone.module';
import './phone-list/phone-list.module';
import './phone-detail/phone-detail.module';
import './app.module.ajs';

// include all AngularJS files & modules  from /app
// declare const require: any;

// const context = require.context('./', true, /\.ts$/);

// context.keys().forEach((file: any) => {
//     try {
//         context(file);
//     } catch (err) {
//         console.log(err, file);
//     }
// });

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
