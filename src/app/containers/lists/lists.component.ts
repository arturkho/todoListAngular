import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
 @Input() _lists: any;
  addTaskFormIsOpen: string;
  openRemoveModal: string;

  constructor() {
  }

  ngOnInit() {
  }

  openAddTaskForm(listId) {
    this.addTaskFormIsOpen = listId;
  }

  openModal(listId) {
    this.openRemoveModal = listId;
  }

  closeModal(listId) {
    if (this.openRemoveModal === listId) {
      this.openRemoveModal = '';
    }
  }

  removeList(index) {
    this._lists.splice(index, 1);
  }

}
