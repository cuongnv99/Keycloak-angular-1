import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-detail-role',
    templateUrl: './detail-role.component.html',
    //   styleUrls: ['./detail-user.component.scss']
})
export class DetailRoleComponent implements OnInit, OnChanges {

    @Input() detailInfo;
    @Input() openDetail: boolean;
    @Output() onCloseModal = new EventEmitter;
    frmGroup: FormGroup;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm()
    }

    initForm(){
        this.frmGroup = this.fb.group({
            name:[],
            description:[],
            composite:[]
        })
    }

    ngOnChanges(): void {
        if (this.frmGroup) {
          this.frmGroup.patchValue({
            ...this.detailInfo
          })
        }
    
      }

}
