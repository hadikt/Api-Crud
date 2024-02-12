import { Component } from '@angular/core';
import { ApiLoginService } from '../services/api-login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  updateForm!: FormGroup;
  loginForm!: FormGroup;
  showlogin=false
  userUpdate:string|undefined
  constructor(private apiservice:ApiLoginService,private fb: FormBuilder,private router:Router){
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });


}
// .............................................Update
onUpdate(): void {
  console.log("Updating...");

  this.apiservice.updateUser(this.updateForm.value).subscribe((val) => {
    console.log(val);
    if (val) {
    }
    setTimeout(() => {
    this.userUpdate = undefined;
    }, 3000);
  });
  this.userUpdate = "Data Updated Successfully";
  this.router.navigate(['/home']); // Redirect to home page
}
// ......................................................
}
