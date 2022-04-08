import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
              private router: Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const istIdPresent = this.activatedRoute.snapshot.paramMap.has("id");
    if(istIdPresent){
      const id = +!this.activatedRoute.snapshot.paramMap.get('id');

      //TODO: need to fix the list items.html to find the parameter id to select an object

      this.itemService.getSingleItem(id).subscribe(
        data => this.item = data
      )
    }
  }

  saveItem() {
    this.itemService.saveItem(this.item).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl("/items");
      }
    )
  }

  deleteItem(id : number){
    this.itemService.deleteItem(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.router.navigateByUrl('/items');
      }
    )
  }
}
