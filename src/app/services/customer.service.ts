import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Customer } from './../customer';
import { CustomerId } from './../customer-id';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class CustomerService {

  private customerCollection: AngularFirestoreCollection<Customer>;
  private customers: Observable<CustomerId[]>;

  constructor(private afs: AngularFirestore) {
    this.customerCollection = this.afs.collection<Customer>('customers');
  }

  fetchCustomers(): Observable<CustomerId[]> {
    this.customers = this.customerCollection.snapshotChanges().map(
      actions => {
        return actions.map(a => {
          const data  = a.payload.doc.data() as Customer;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    );

    return this.customers;
  }

  addCustomer(customer: Customer): Promise<any> {
    return this.customerCollection.add(customer);
  }

  updateCustomer(customer: CustomerId): Promise<any> {
    return this.customerCollection.doc(customer.id).update(customer);
  }

  deleteCustomer(id: string): Promise<any> {
    return this.customerCollection.doc(id).delete();
  }

  fetchCustomer(id: string): Observable<CustomerId> {
    return this.customerCollection.doc<CustomerId>(id).valueChanges();
  }

}
