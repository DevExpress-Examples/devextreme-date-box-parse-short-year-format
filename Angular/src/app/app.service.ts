import { Injectable } from '@angular/core';

export interface Employee {
  ID: number;

  FirstName: string;

  LastName: string;

  Prefix: string;

  Position: string;

  BirthDate: string;

  HireDate: string;

  Address: string;
}

const employees: Employee[] = [{
  ID: 1,
  FirstName: 'John',
  LastName: 'Heart',
  Prefix: 'Mr.',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Address: '351 S Hill St.',
}, {
  ID: 2,
  FirstName: 'Olivia',
  LastName: 'Peyton',
  Prefix: 'Mrs.',
  Position: 'Sales Assistant',
  BirthDate: '1981/06/03',
  HireDate: '2012/05/14',
  Address: '807 W Paseo Del Mar',
}];

@Injectable()
export class Service {
  getEmployees(): Employee[] {
    return employees;
  }
}
