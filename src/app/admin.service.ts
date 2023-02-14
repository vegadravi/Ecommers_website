import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminRegister } from './model/admin-register';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = 'https://r4x-info-default-rtdb.firebaseio.com';
  constructor(private http:HttpClient) { }
  registeradmin(adminRF: adminRegister){
    console.log('R4x34234',adminRF);
    console.log('R4x url',this.url);
    
    return this.http.post('https://r4x-info-default-rtdb.firebaseio.com/heroes.json', adminRF)
            // .pipe(
            //   map( (resp: any) => {
            //     adminRF.id = resp.name;
            //     return adminRF;
            //   })
            // );
  }
}
