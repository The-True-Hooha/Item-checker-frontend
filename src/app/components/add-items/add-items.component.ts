import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemChecker } from 'src/app/models/item-checker';
import { ItemCheckerService } from 'src/app/services/item-checker.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  item: ItemChecker = new ItemChecker();

  constructor(private itemService: ItemCheckerService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveItem() {
    this.itemService.saveItem(this.item).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl("/items");
      }
    )
  }
}
