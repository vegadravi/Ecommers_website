import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
dummyDataUrl = 'https://dummyjson.com/products?limit=10'
  constructor() { }

  getDataforDashboard(){
    let fatcheData = fetch(this.dummyDataUrl).then(res =>res.json());
    console.log('R4x',fatcheData);
    return fatcheData;
  }
}
