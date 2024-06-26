import { Component } from '@angular/core';
import { Format } from 'devextreme/localization';
import { formatter, parser } from '../utils';
import { Employee, Item, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent {
  employees: Employee[];

  items: Item[];

  selectBoxValue = 'javascript';

  now: Date = new Date();

  format: Format = {
    parser: (val) => parser(val, this.selectBoxValue),
    formatter: (val) => formatter(val),
  };

  editorOptions = {
    displayFormat: this.format,
  };

  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.items = service.getItems();
  }
}
