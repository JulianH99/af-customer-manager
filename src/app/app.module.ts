import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RouterModule } from '@angular/router';
import routes from './routes';

import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/environment';
import { ManagersComponent } from './managers/managers.component';


@NgModule({
  declarations: [
    AppComponent,
    ManagersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
