import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {setAngularJSGlobal} from '@angular/upgrade/static';

import 'angular-resource';
import 'angular-route';

// And import our AngularJS module
import './app';


setAngularJSGlobal(angular);

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    // Use the upgrade module to bootstrap the hybrid
    // console.log("1. AppModule (Angular) loaded successfully.");
    // const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    // upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    // console.log("2. AppModule (Angular) loaded successfully.");
  })
  .catch(err => console.log(err));