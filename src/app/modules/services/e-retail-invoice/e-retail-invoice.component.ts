import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { EmployeeService } from '../../../services/api/employee.service';

@Component({
  selector: 'app-e-retail-invoice',
  templateUrl: './e-retail-invoice.component.html',
  styleUrls: ['./e-retail-invoice.component.scss']
})
export class ERetailInvoiceComponent implements OnInit {

  openEmployeeSearchModal: boolean;
  openBarcodeModal: boolean;
  openCustomerInfoModal: boolean;

  tableData: TableData;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getRetailInvoice().subscribe((res: TableData) => {
      this.tableData = res;
    });
  }

}
