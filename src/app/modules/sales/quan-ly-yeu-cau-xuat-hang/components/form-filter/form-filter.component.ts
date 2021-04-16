import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-form-filter',
    templateUrl: './form-filter.component.html',
    // styleUrls: ['./../../sale-in-market.component.scss']
    styleUrls: ['../../quan-ly-yeu-cau-xuat-hang.component.scss']
})
export class FormFilterComponent implements OnInit {
    items:any[];
    date3: Date;
    saleList: any[] = []
    selectedCities: string[] = [];

    isOpenCustomerInfoModal: boolean;
    isOpenSearchEmplModal: boolean;
    money: any[] = [
        { name: 'Tiền mặt', key: "TM" },
    ]
    listGiam: any[] = [
        { name: '--Chọn lý do giảm--', key: "" },
    ]

    constructor() { }

    ngOnInit(): void {
        this.items = [
            { icon: 'pi pi-home', label: ' Trang chủ' },
            { label: 'Nghiệp vụ bán hàng' },
            { label: 'Quản lý yêu cầu xuất bán' },
          ];
    }

    onClick(event) {
        console.log(event, 'aaaaaaaa')
    }

    onEnterMember(event) {
        if (event.keyCode === 13) {
            this.isOpenCustomerInfoModal = true;
        }
    }


}