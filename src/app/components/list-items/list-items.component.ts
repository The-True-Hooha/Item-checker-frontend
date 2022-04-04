import { Component, OnInit } from '@angular/core';
import { ItemChecker } from 'src/app/models/item-checker';
import { ItemCheckerService } from 'src/app/services/item-checker.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  //empty array to hold the list of items
  items : ItemChecker[] = [];

  constructor(private itemService : ItemCheckerService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      data => this.items = data
    )
  }

}
