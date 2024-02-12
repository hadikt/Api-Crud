import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {ApiLoginService} from '../services/api-login.service'
export const authGuard: CanActivateFn = (route, state) => {

  // const service = inject(ApiLoginService)
  if(localStorage.getItem('token')){
  return true;
  }
  else{
    return false
  }

};
