import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILocation } from '../../../models/location.model';

@Component({
  selector: 'app-location-selection',
  templateUrl: './location-selection.component.html',
  styleUrls: ['./location-selection.component.scss']
})
export class LocationSelectionComponent implements OnInit {

  @Input() label: string;
  @Input() plholder: string;
  @Input() locationDatas: ILocation[];
  @Output() onChangeLocation = new EventEmitter();
  tooltipValue: string = '';
  test: any[] =[
    {locationCode: 29,name: '29 - Hà Nội'},
    {locationCode: 30,name: '30 - Hà Nam'},
  ]
  constructor() { }

  ngOnInit(): void {
    this.locationDatas = [
      {
        id: '1',
        locationCode: 29,
        locationName: 'Hà Nội'
      },
      {
        id: '2',
        locationCode: 99,
        locationName: 'Bắc Ninh'
      },
      {
        id: '3',
        locationCode: 18,
        locationName: 'Nam Định'
      },
      {
        id: '4',
        locationCode: 20,
        locationName: 'Thái Nguyên'
      }
    ]
  }

  selectedLocation(event) {
    this.onChangeLocation.emit(event);
    if (event != null) {
      this.tooltipValue = event.id + " - " + event.lName;
    } else {
      this.tooltipValue = '';
    }
  }

  customSearchLocation(term: string, item: any) {
    term = term.toLocaleLowerCase().trim();
    return (item.id + " - " + item.lName).toLocaleLowerCase().indexOf(term) > -1;
  }

}
