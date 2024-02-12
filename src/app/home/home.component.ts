import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '../services/api-login.service';
import { product } from 'dataType';
import { Router } from '@angular/router';
// import { log } from 'console';
// import {faacc } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productlist:undefined|product[]
  showUserInfoDiv = false; // Variable to control the visibility of the user info div
  userName = 'John Doe'; // Example user name
  userEmail = 'john@example.com'; // Example user email
  userId: string | undefined; // Add this line

constructor(private apiservice:ApiLoginService,private router:Router){}

ngOnInit(): void {
  this.list()

}
// .......................................................for listing the product from Api
list(){
  this.apiservice.productListing().subscribe((val)=>{
if(val){
  this.productlist=val
  console.log(val);

}
  })
}
// .................................for toggle
toggleUserInfoDiv(): void {
  this.showUserInfoDiv = !this.showUserInfoDiv;
}

// ................................................delete
deleteUser(): void {
  if (confirm('Are you sure you want to delete this user?')) {

    this.apiservice.deleteuser().subscribe((res)=>{
      console.log(res);
      alert('User deleted successfully');

    })
  }
    this.router.navigate(['/login'])

}
}
