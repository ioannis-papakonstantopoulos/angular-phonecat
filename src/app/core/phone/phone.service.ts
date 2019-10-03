
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { downgradeInjectable } from '@angular/upgrade/static';

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class Phone {
  
  constructor(private http: HttpClient) { }

  // query(): Observable<PhoneData[]> {
  //   return this.http.get<PhoneData[]>(`phones/phones.json`);
  // }
  
  // get(id: string): Observable<PhoneData> {
  //   return this.http.get<PhoneData>(`phones/${id}.json`);
  // }

  query(): Promise<PhoneData[]> {
    return this.http.get<PhoneData[]>(`phones/phones.json`).toPromise();
  }
  get(id: string): Promise<PhoneData> {
    return this.http.get<PhoneData>(`phones/${id}.json`).toPromise();
  }
}

angular.module('core.phone')
  .factory('Phone', downgradeInjectable(Phone) as any);