import { Component, ChangeDetectionStrategy } from '@angular/core';
import type { Format } from 'devextreme/localization';
import { formatter, parser } from '../utils';
import { Employee, Item, Service } from './app.service';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';

@Component({
  imports: [DxDataGridModule, DxDateBoxModule, DxSelectBoxModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [Service],
})
export class AppComponent {
  employees: Employee[];

  items: Item[];

  selectBoxValue = 'javascript';

  now: Date = new Date();

  format: Format = {
    parser: (val: string) => parser(val, this.selectBoxValue),
    formatter: (val: number | Date) => formatter(val),
  };

  editorOptions = {
    displayFormat: this.format,
  };

  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.items = service.getItems();
  }
}
