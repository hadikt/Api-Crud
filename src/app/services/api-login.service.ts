import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'
import { Login, Register, RegisterResponse, product } from 'dataType';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {
  fetchUsers() {
    throw new Error('Method not implemented.');
  }
baseurl=environment.base
islogged=new BehaviorSubject<boolean>(false)
// isSellerLoggedIn=new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient,private router:Router) { }
  // .....................................................signup
  userSignup(datas:Register){

    return this.http.post<RegisterResponse>(`${this.baseurl}/api/register`,datas).pipe(
      tap(res=>
      res.token)
    )


   }
  //  .......................................................Login
      userlogin(data:Login){
return this.http.post(`${this.baseurl}/api/login`,data)
      }
// ........................................................relod function
      relod(){
        if(localStorage.getItem('token')){
          this.islogged.next(true)
          this.router.navigate([''])
        }
      }

      // .................................................items display

      productListing(){
        return this.http.get<product[]>(`${this.baseurl}/api/items`)
      }

//........................................................... update

updateUser(data: { name: string, password: string }) {
  // Define your headers
  const token = JSON.parse( localStorage.getItem('token')|| '')
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': token
  });

  // Make the HTTP request with headers
  return this.http.put(`${this.baseurl}/api/update-user`, data, { headers });
}

// .....................................................delete User
deleteuser():Observable<any>{
  const token =JSON.parse( localStorage.getItem('token')|| '')

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': token
  })
  return this.http.delete(`${this.baseurl}/api/delete-user/`,{headers})
}

}
