import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/Rx';

import { Player } from './player.interface';
import { orangeCappedDirective } from './orangecap.directive';
import { playerServices } from './player.services';

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app works!';
  players = PLAYER;
  /*constructor(private http: Http) {
      this.http.get('/assets/players.json')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.players = data},
        err => console.error(err),
        () => console.log('Done')
      );
   }*/
   constructor(private _playerServices: playerServices){}
   ngOnInit(){
     this.players = this._playerServices.getPlayer();
   }
}

var PLAYER: Player [] = [];