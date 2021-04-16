import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-form-footer',
    templateUrl: './form-footer.component.html'
})
export class FormFooterComponent implements OnInit {

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