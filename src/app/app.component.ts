import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from "firebase";
import 'firebase/firestore';
import { Observable } from 'rxjs'
import { environment } from './../environments/environment';
// import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   database = firebase.database();
  companies = [];
  i = 0;

  constructor (private afs: AngularFirestore,
    private db: AngularFireDatabase) {
    }
    ngOnInit() {
      this.getCompany();
    }
  getCompany() {
    this.db.list('/company/').valueChanges().subscribe(_data => {
        this.companies = _data;
        console.log(this.companies);
        console.log(_data);
      });
  }
  createCompany(form: NgForm) {
    
    const nameCompany = form.form.value.nameCompany;
    const yearsAmount = form.form.value.yearsAmount;
    console.log(nameCompany, yearsAmount)
    this.database.ref('/company/' + this.i++).set({
      name: nameCompany,
      budget: yearsAmount
    })
    form.resetForm();
  }
  delete(company) {
    console.log(company.name);
    this.db.list('/company/' + company.name).remove();
  }
  edit(form: NgForm, company) {
    const nameCompany = form.form.value.nameCompany;
    const yearsAmount = form.form.value.yearsAmount;
    console.log(nameCompany, yearsAmount);
    console.log(company.name);
    let tmp = {
      budget: yearsAmount,
      name: nameCompany
    };
    firebase.database().ref('/company/' + company.name).on('value', function(snapshot) {
      console.log(snapshot.val());
      console.log(company.name);
      console.log(firebase.database().ref('/company/' + company.name  ));
      var updates = {};
      updates['/company/' + company.name] = tmp;
    
      return firebase.database().ref().update(updates);
      // firebase.database().ref('/company/' + company.name ).set(snapshot.val(), tmp);
    });
  }
}
