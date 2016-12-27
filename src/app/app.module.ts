import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ModalModule} from "ng2-modal";

import { AppComponent } from './app.component';
import { PlayerListComponent } from './playerlist.component';
import { PlayerDetailComponent } from './playerdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
