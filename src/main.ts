import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {setAngularJSGlobal} from '@angular/upgrade/static';

import 'angular-resource';
import 'angular-route';

// And import our AngularJS module
import './app';


setAngularJSGlobal(angular);

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  })
  .catch(err => console.log(err));