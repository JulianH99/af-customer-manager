import { Component, OnInit } from '@angular/core';
import { Customer } from './../customer';
import { CustomerService } from './../services/customer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customer: Customer;
  error = false;

  constructor(private customerService: CustomerService,
    private location: Location) {
    this.customer = {
      name: '',
      lastname: '',
      celphone: 0,
      address: ''
    };
  }

  ngOnInit() {
  }


  goBack() {
    this.location.back();
  }

  // add current customer data to firebase through the service
  add() {
    if (this.customer.name && this.customer.lastname && this.customer.address
      && this.customer.celphone.toString()) {
        this.error = false;
        this.customerService.addCustomer(this.customer)
          .then(result => this.goBack());
    }else {
      this.error = true;
    }
  }

}
