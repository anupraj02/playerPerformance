import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/Rx';

import { Player } from './player.interface';
@Injectable()
export class playerServices{
   playersNew: Player [] = [];
   lastId = 0;
    constructor(private http:Http) {
      this.http.get('./assets/players.json')
          .map((res:Response) => res.json())
          .subscribe(
            data => {
              for (let key in data) {
                this.addPlayer(data[key]);
              }
            },
            err => console.error(err),
            () => console.log('Done')
          );
    }
    getPlayer(){
        return this.playersNew;
    }
    addPlayer(newPlayer){
        this.lastId = this.lastId+1;
        newPlayer.id=this.lastId;
        this.playersNew.push(newPlayer);
    }
    deletePlayer(playerItem){
        let index = this.playersNew.indexOf(playerItem);
        if(index >=0){
            this.playersNew.splice(index,1);
        }
    }
}