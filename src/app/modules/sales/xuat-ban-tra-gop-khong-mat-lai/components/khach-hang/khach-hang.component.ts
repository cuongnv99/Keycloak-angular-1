import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-khach-hang',
  templateUrl: './khach-hang.component.html',
  styleUrls: ['./../../xuat-ban-tra-gop-khong-mat-lai.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class KhachHangComponent implements OnInit {


  isOpenCusInfoViewModal: boolean;
  
  selectedGender: null
  gender: any[] = [
    { name: "Nam" },
    { name: "Nữ" }
  ]

  constructor() { }

  ngOnInit(): void {
    this.selectedGender = this.gender[1];
  }

  onClick(event) { }

  
}
