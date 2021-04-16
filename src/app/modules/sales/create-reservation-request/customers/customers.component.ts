import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  selectedGender : null
  gender:any[]=[
    {name:"Nam"},
    {name:"Nữ"}
  ]

  constructor() { }

  ngOnInit(): void {
    this.selectedGender = this.gender[1];
  }

  onClick(event){}

}
