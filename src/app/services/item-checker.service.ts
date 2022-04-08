import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ItemChecker } from 'src/app/models/item-checker';

@Injectable({
  providedIn: 'root'
})
export class ItemCheckerService {

  //variable to store the endpoints that connects to the get request from the backend
  private getUrl : string = "http://localhost:3000/api/v1/items"

  constructor( private httpClient : HttpClient) {}

  //method that gets the all items
  getItems() : Observable<ItemChecker[]> {

    //returns the items checker model entities
    return this.httpClient.get<ItemChecker[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  //method to save an item
  saveItem(item: ItemChecker): Observable<ItemChecker> {
    return this.httpClient.post<ItemChecker>(this.getUrl, item);
  }

  //method to get a single item by id
  getSingleItem(id: number) : Observable<ItemChecker> {
    return this.httpClient.get<ItemChecker>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  //method to delete an item
  deleteItem(id: number) : Observable<any> {
    return this.httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
}
