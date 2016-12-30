import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ModalModule} from "ng2-modal";

import { AppComponent } from './app.component';
import { Player } from './player.interface';
import { PlayerListComponent } from './playerlist.component';
import { PlayerDetailComponent } from './playerdetail.component';
import { orangeCappedDirective } from './orangecap.directive';
import { orangeCapPipe } from './orangecap.pipes';
import { purpleCapPipe } from './purplecap.pipes';
import { playerServices } from './player.services';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    orangeCappedDirective,
    orangeCapPipe,
    purpleCapPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule
  ],
  providers: [
    playerServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
