import { Component } from '@angular/core';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
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

  constructor (private afs: AngularFirestore) {
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    afs.firestore.settings(settings);
    firebase.initializeApp(environment.firebaseConfig)
  }

  createCompany() {
    const collection = firebase.firestore().collection('mainCompany');
  }
}
