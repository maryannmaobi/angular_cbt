import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // angForm = FormGroup;
  submitted = false;

  incorrect = false;

  correct = false;


  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) { 
  }
        angForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
        });

  ngOnInit() {
  }

get myemail(){ return this.angForm.get('email'); }
get mypassword(){ return this.angForm.get('password'); }


postdata(){
  let myadminlogin = this.angForm.value;
  // console.log(myadminlogin);
   this.dataService.userlogin(myadminlogin).subscribe((data: any) =>{
     let logs = data;
     console.log(logs);
     if(data.success){
        console.log(data.success);
      this.router.navigate(['/sidebar'])
     }
     else{
       alert('username or password is incorrect')
     }
    //  let e = logs.filter(users => {
    //    if (myadminlogin.email == users.email && myadminlogin.password == users.password) {
    //      this.router.navigate(['/mainadminsidenav'])
    //    }else{
    //      this.incorrect = true;
    //    }
    //  })
  //  })
  //  error => {
  //    alert('User name or password is incorrect');
  //    }
    })

 }



// postdata() {
//   const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/sidebar';
// this.dataService.userlogin(angForm1.value.email, angForm1.value.password).subscribe(
// data => {
//   console.log(data);
//   if (this.angForm.invalid) {
//     return;
//  }
//  else{
//    setTimeout(() => {
//      this.submitted = true;
//      this.router.navigate([redirect]);
//    }, 2000);
//  }
// },
// error => {
//  setTimeout(() => {
//   this.incorrect = true;
//   this.angForm.reset();
//  }, 2000);
// });
// }


}
