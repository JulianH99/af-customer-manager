import { CustomerId } from './../customer-id';
import { Component, OnInit } from '@angular/core';
import { Customer } from './../customer';
import { CustomerService } from './../services/customer.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customer: Customer;
  public id: string;
  error = false;

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location) {
    this.customer = {
      name: '',
      lastname: '',
      celphone: 0,
      address: ''
    };
  }

  ngOnInit() {

    if ((this.id = this.route.snapshot.params['id'])) {
      this.customerService.fetchCustomer(this.id).subscribe(
        customer => this.customer = customer
      );
    }
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

  edit() {
    const customer: CustomerId = {
      ...this.customer,
      id: this.id
    };

    this.customerService.updateCustomer(customer).then(
      result => this.goBack()
    );

  }

}
