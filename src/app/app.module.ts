import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { AddItemsComponent } from './components/add-items/add-items.component';


//defined variable for the router
const routers: Routes = [
  {path: 'items', component: ListItemsComponent},
  {path: 'addItems', component: AddItemsComponent},
  {path: '', redirectTo: '/items', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    AddItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
