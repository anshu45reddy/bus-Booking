import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})

export class PaymentPageComponent {
  
  users=[];
  
  constructor() { }

 
  addUserData(ref){
    let UserObj=ref.value;
    console.log(UserObj);
    this.users=UserObj;
    ref.reset();
 }

}