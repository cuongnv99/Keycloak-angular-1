import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-coupon',
  templateUrl: './check-coupon.component.html',
  styleUrls: ['./check-coupon.component.scss']
})
export class CheckCouponComponent implements OnInit {
  date3: Date;
  constructor() { }

  ngOnInit(): void {
    this.date3 = new Date();
  }

}
