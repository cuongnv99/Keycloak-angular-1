import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samsung-random-wheel',
  templateUrl: './samsung-random-wheel.component.html',
  styleUrls: ['./samsung-random-wheel.component.scss']
})
export class SamsungRandomWheelComponent implements OnInit {

  items: any[];
  home: any;
  
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'Service' },
      { label: 'Lật ô samsung' },
    ];
    this.home = {icon: 'pi pi-home'};
  }

}
