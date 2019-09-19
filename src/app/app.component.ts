

import { Component } from '@angular/core';

export enum Sex{
  None = ' ', 
  Male = 'male', 
  Female = 'female'
}
export class Person
{
  public Name:string;
  public Sex: Sex;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedName: string;// =  "John Brown";
  persons: Person[] = [];

  property = {
    ref_no: '',
    address: '',
    manager: undefined
  };
  
  sexes:Sex[]=[Sex.None, Sex.Male, Sex.Female];

  managers = [
    { "company": "Test Company", "name": "John Doe", "id": "3oE37Fo2QxGHw52W7UHI" }, 
    { "company": "Another Company", "name": "John Brown", "id": "LRF8xAi48rRuWu0KZex3" }, 
    { "company": "XYZ", "name": "Subhan Ahmed", "id": "TqOQHbdwJdwgwD8Oej8v" }
    ];

    constructor(){
      this.property.manager = this.managers[2];

      var p = new Person(); p.Name = 'Alice'; p.Sex = Sex.Female;
      this.persons.push(p);
      var p2 = new Person(); p2.Name = 'Bob'; p2.Sex = Sex.Male;
      this.persons.push(p2);
      var p3 = new Person(); p3.Name = 'Steve'; p3.Sex = Sex.None;
      this.persons.push(p3);      
    }

  // onNameChange($event) {
  //   let selectedNameUp = this.selectedName.toUpperCase();
  //   this.property.manager = this.managers.find(m => m.name.toUpperCase() === selectedNameUp);
  // }

}



