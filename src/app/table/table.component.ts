import { Component, OnInit } from '@angular/core';

export interface Employee {
  firstName: string;
  lastName: string;
  designation: string;
  experience: string;
  age?: number;
  currentLocation: string;
  phoneNumber?: string;
  telecommuter: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public employees: Employee[] = [
    {
      firstName: 'John',
      lastName: 'Appleseed',
      designation: 'Senior Software Engineer',
      experience: '18 months',
      age: 27,
      phoneNumber: '9798636932',
      currentLocation: 'Chicago',
      telecommuter: true
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      designation: 'Associate Software Engineer',
      experience: '12 months',
      currentLocation: 'Omaha',
      phoneNumber: '9798636932',
      telecommuter: false
    },
    {
      firstName: 'John',
      lastName: 'Papa',
      designation: 'Angular Developer',
      experience: '48 months',
      currentLocation: 'Silicon Valley',
      telecommuter: true
    }
  ];

  public employeeKeys = Object.keys(this.employees[0]);
}
