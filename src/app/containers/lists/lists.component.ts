import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
 @Input() _lists: any;

  constructor() {
  }

  ngOnInit() {
    // this.http.get('http://localhost:4200/').subscribe(j => console.log(j));
  }
  removeCurrentList(listId, index) {
    this._lists.splice(index, 1);
  }
}
