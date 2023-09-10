import { Injectable, Optional } from '@angular/core';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Auth, getAuth, signInAnonymously } from '@angular/fire/auth';
import { authState } from 'rxfire/auth';


@Injectable({
  providedIn: 'root'
})
export class PenguinAuthService {

  constructor(@Optional() public fireAuth: Auth) {
    
   }

  login(){
    const auth = getAuth();
    signInAnonymously(auth).then(() => {
    // Signed in..
  })
  }

  logout(){

  }
}
