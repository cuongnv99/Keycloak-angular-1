import { collectExternalReferences } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TableData } from '../../../models/table.model';

@Component({
  selector: 'app-table-dynamic',
  templateUrl: './table-dynamic.component.html',
  styleUrls: ['./table-dynamic.component.scss']
})
export class TableDynamicComponent implements OnInit {
  openDialogEdit: boolean = false
  tableData: any[];
  tableCol: any[];
  convertedDataTbl: any[] = [];

  rowEditting: any[] = [];
  idxRowEditting: number;
  idxCellEditting: number;
  valueCellEditting: string;

  rowDataRef = {};
  frozenWidth: number;
  frozenCol = [];
  @Input() isEditable: boolean;

  _data: TableData;
  @Input() set data(val) {
    if (val) {
      this._data = val;
      this.tableData = val.datas;
      this.tableCol = val.cells.filter(e => !e.isFrozen);
      let froCol = val.cells.filter(e => e.isFrozen);
      if (froCol && froCol.length > 0) {
        this.frozenCol = froCol;
        this.frozenWidth = this.getFrozenWidth(this.frozenCol);
      } else {
        this.frozenWidth = null;
      }
    }
  };
  get data(): TableData {
    return this._data;
  }
  @Input() scrollHeight: string;
  @Output() onChangeRowTable = new EventEmitter();

  items: MenuItem[];
  @Input() isShowTiredMenu: boolean;
  @Output() editUser = new EventEmitter();
  @Output() editDynamicTable = new EventEmitter();
  @Output() deleteUser = new EventEmitter();
  @Output() routerToDo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.scrollHeight = this.scrollHeight ? this.scrollHeight : '250px';
  
  }

  onRowEditInit(rowData) {
    // this.rowDataRef = { ...rowData };
    this.editDynamicTable.emit(true);
    console.log(rowData,"rowData");
    this.editUser.emit(rowData)
    
  }

  onRowEditSave() {
    this.onChangeRowTable.emit();
  }

  onRowEditCancel(rowIdx) {
    // this.tableData[rowIdx] = this.rowDataRef;
    this.deleteUser.emit(this.tableData[rowIdx].id);
    console.log(this.tableData[rowIdx].id);
    
    
  }

  getFrozenWidth(arr: any) {
    let width = 0;
    arr.forEach(e => {
      width = width + e.width;
    });
    return width;
  }

  routerTo(rowData){
    this.routerToDo.emit(rowData);
  }
}
