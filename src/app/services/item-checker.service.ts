import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ItemChecker } from '../models/item-checker';

@Injectable({
  providedIn: 'root'
})
export class ItemCheckerService {

  //variable to store the endpoints that connects to the get request from the backend
  private getUrl : string = "http://localhost:3000/api/v1/items"

  constructor( private httpClient : HttpClient) {}

  //method that gets the items
  getItems() : Observable<ItemChecker[]> {

    //returns the items checker model entities
    return this.httpClient.get<ItemChecker[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveItem(item: ItemChecker): Observable<ItemChecker> {
    return this.httpClient.post<ItemChecker>(this.getUrl, item);
  }
}
