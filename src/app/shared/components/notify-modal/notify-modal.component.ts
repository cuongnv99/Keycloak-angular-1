import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notify-modal',
  templateUrl: './notify-modal.component.html',
  styleUrls: ['./notify-modal.component.scss']
})
export class NotifyModalComponent implements OnInit {

  @Input() isOpenModal: boolean;
  @Output() onCloseModal = new EventEmitter();
  @Input() contentPopup: string;

  constructor() { }

  ngOnInit(): void {
  }

  confirm() {
    this.onCloseModal.emit();
  }

}
