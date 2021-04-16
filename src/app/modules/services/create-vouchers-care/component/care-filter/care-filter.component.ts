import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-care-filter',
    templateUrl: './care-filter.component.html',
    styleUrls: ['../../create-vouchers-care.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class CareFilterComponent implements OnInit {

    CareForm: FormGroup

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.initForm()
    }
    initForm() {
        this.CareForm = this.formBuilder.group({
            warehouse: [{ value: '', disabled: true }],
            date: [],
            employee: [],
            IMEI: [],
            product: [],
            Note: []
        })
    }
}