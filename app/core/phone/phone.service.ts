// angular.
//   module('core.phone').
//   factory('Phone', ['$resource',
//     function($resource: angular.resource.IResourceService) {
//       return $resource('phones/:phoneId.json', {}, {
//         query: {
//           method: 'GET',
//           params: {phoneId: 'phones'},
//           isArray: true
//         }
//       });
//     }
//   ]);

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var angular: angular.IAngularStatic;
import { downgradeInjectable } from '@angular/upgrade/static';

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class Phone {
  constructor(private http: HttpClient) {
    console.log('Inside Phone sercice constructor');
  }
  query(): Observable<PhoneData[]> {
    console.log('Querying for all phones.');
    return this.http.get<PhoneData[]>(`phones/phones.json`);
  }
  get(id: string): Observable<PhoneData> {
    console.log('Querying for phone ID:' + id);
    return this.http.get<PhoneData>(`phones/${id}.json`);
  }
}

angular.module('core.phone').factory('phone', downgradeInjectable(Phone));
