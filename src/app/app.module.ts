import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
// import * as firebase from "firebase/app";
import * as firebase from "firebase";
import { environment } from './../environments/environment';
import 'firebase/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule      
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
