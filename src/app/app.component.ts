import { Component } from '@angular/core';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from "firebase";
import 'firebase/firestore';
import { Observable } from 'rxjs'
import { environment } from './../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   database = firebase.database();

  constructor (private afs: AngularFirestore,
    private db: AngularFireDatabase) {

  }

  createCompany() {
    this.database.ref('mainCompany').set({
      budget: 35
    })


  }
}
