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
    this.database.ref('/company/' + nameCompany).set({
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
    console.log(nameCompany, yearsAmount)
    console.log(company.name);
    let tmp = { 
      name: nameCompany,
      budget: yearsAmount
    };
    
    this.db.list('/company/' + company.name).set(company, {
      name: nameCompany,
      budget: yearsAmount
    });
  }
}
