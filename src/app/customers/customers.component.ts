import { CustomerId } from './../customer-id';
import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers: CustomerId[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.fetchNotes();
  }

  fetchNotes() {
    this.customerService.fetchCustomers().subscribe(
      customers => this.customers = customers
    );
  }

  delete(id) {
    this.customerService.deleteCustomer(id)
      .then(result => this.fetchNotes());
  }

  edit(id) {

  }
}
