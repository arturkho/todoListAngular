import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  openRemoveModal: string;
  @Input() list: any;
  @Output() _listId = new EventEmitter<string>();

  constructor(private ar: ActivatedRoute) {
    ar.params.subscribe(param => console.log(param));
  }

  ngOnInit() {
  }

  openModal(listId) {
    this.openRemoveModal = listId;
  }

  closeModal(listId) {
    if (this.openRemoveModal === listId) {
      this.openRemoveModal = '';
    }
  }
  removeList(listId) {
    this._listId.emit(listId);
  }
}
