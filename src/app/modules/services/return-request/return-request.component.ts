import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-request',
  templateUrl: './return-request.component.html',
  styleUrls: ['./return-request.component.scss']
})
export class ReturnRequestComponent implements OnInit {

  items: any[];
  home: any;
  
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'Service' },
      { label: 'Yêu cầu đổi trả' },
    ];
    this.home = {icon: 'pi pi-home'};
  }

}
