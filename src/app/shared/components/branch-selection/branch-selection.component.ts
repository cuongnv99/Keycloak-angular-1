import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBranch } from '../../../models/branch.model';
import { VIETNAMES_SPECIFIC_CHARACTER } from '../../enums/constants';
@Component({
  selector: 'app-branch-selection',
  templateUrl: './branch-selection.component.html',
  styleUrls: ['./branch-selection.component.scss']
})
export class BranchSelectionComponent implements OnInit {

  @Input() branchDatas: IBranch[];
  @Output() onChangeBranch = new EventEmitter();
  tooltipValue: string = '';

  constructor() { }

  ngOnInit(): void {
    this.branchDatas = [
      {
        branchId: '2',
        branchName: 'Chi nhánh Công ty TNHH Nhà nước MTV TM và XNK Viettel tại An Giang'
      },
      {
        branchId: '3',
        branchName: 'Chi nhánh Công ty TNHH Nhà nước MTV TM và XNK Viettel tại Bình Dương'
      },
      {
        branchId: '4',
        branchName: 'Chi nhánh Công ty TNHH Nhà nước MTV TM và XNK Viettel tại Bình Định'
      },
      {
        branchId: '5',
        branchName: 'Chi nhánh Công ty TNHH Nhà nước MTV TM và XNK Viettel tại Bắc Giang'
      },
      {
        branchId: '6',
        branchName: 'Chi nhánh Công ty TNHH Nhà nước MTV TM và XNK Viettel tại Bắc Kạn'
      }
    ]
  }

  selectedBranch(event) {
    let branchData = event;
    this.onChangeBranch.emit(branchData);
    if (branchData != null) {
      this.tooltipValue = branchData.branchId + " - " + branchData.branchName
    } else {
      this.tooltipValue = '';
    }
  }

  customSearchBrach(term: string, item: any) {
    term = term.toLocaleLowerCase().trim();
    return (item.branchId + " - " + item.branchName).toLocaleLowerCase().indexOf(term) > -1;
  }

  blockSpecialChars(event) {
    var regex = new RegExp("^[a-zA-Z0-9\\s]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!(regex.test(key) || VIETNAMES_SPECIFIC_CHARACTER.includes(key))) {
      event.preventDefault();
      return false;
    }
  }

}
