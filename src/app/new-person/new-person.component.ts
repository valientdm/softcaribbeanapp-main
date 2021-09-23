import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PersonService } from "../services/person/person.service";
import { Person } from "../interfaces/person";

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css'],
  providers: [PersonService]
})
export class NewPersonComponent implements OnInit {

  constructor(private personService:PersonService ) { }

  request = {
    dni: new FormControl('').value,
    firstName: new FormControl('').value,
    lastName: new FormControl('').value,
    genre: new FormControl('').value,
    address: new FormControl('').value,
    photo: new FormControl('').value,
    phoneNumber: new FormControl('').value,
    mobileNumber: new FormControl('').value,
    email: new FormControl('').value,
    birthDate: new FormControl('').value,
    personTypeId: 1,
    codUser: new FormControl('').value
  }
  

  ngOnInit(): void {
  }

  submit(): void {
    console.log('SUBMIT');

    const newHero: Person = this.request;

   this.personService.addPerson(newHero)
   .subscribe(res => console.log);
  }
    

}
