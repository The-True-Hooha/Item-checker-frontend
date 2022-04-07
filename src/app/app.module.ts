import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListItemsComponent } from './components/list-items/list-items.component';

import { HttpClientModule} from '@angular/common/http';
import { AddItemsComponent } from './components/add-items/add-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    AddItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
