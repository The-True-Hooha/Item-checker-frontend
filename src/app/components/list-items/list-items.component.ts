import { Component, OnInit } from '@angular/core';
import { ItemChecker } from 'src/app/models/item-checker';
import { ItemCheckerService } from 'src/app/services/item-checker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  //empty array to hold the list of items
  items : ItemChecker[] = [];

  filters = {
    keyword: '',
    sortBy: 'Name, Location'
  }

  constructor(private itemService : ItemCheckerService,
              private router: Router) { }

  ngOnInit(): void {
    this.listItems();
  }

  //delete method for the html component
  deleteItem(id : number){
    this.itemService.deleteItem(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listItems();
      }
    )
  }

  listItems() {
    this.itemService.getItems().subscribe(
      data => this.items = this.filterItems(data)

    )
  }

  //filter items contains the logic for th sort
  filterItems(items: ItemChecker[]) {
    return items.filter((i) => {
      return i.itemName.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a, b) => {
      if(this.filters.sortBy === 'Name'){
        return a.itemName.toLowerCase() < b.itemName.toLowerCase() ? -1: 1;
      } 
      else if(this.filters.sortBy === 'Location'){
        return a.location > b.location.toLowerCase() ? -1: 1;
      }
    })
  }
//TODO: fix the sort logic
}
