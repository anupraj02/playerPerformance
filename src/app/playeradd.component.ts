import { Component,Input,Directive,HostBinding } from '@angular/core';
import { Player } from './player.interface';
import { playerServices } from './player.services';

@Component({
  selector: 'player-add',
  templateUrl: './playeradd.component.html',
  styleUrls: ['./playeradd.component.css']
})


export class PlayerAddComponent {
    constructor(private _playerServices: playerServices){}
    addshow = false;
    addNewPlayer(){
        this.addshow = !this.addshow;
      let newPlay = {
          "id":1,
          "pname": "Johnson",
          "company": "BLANET",
          "matches": 11,
          "inn": 6,
          "runScored": 123,
          "highest":45,
          "ballfaced": 104,
          "overs": 9,
          "maidens": 2,
          "runsGiven": 93,
          "wickets": 8,
          "about": "Velit laborum consequat est anim veniam duis. Sunt proident aute voluptate ullamco aute sunt ea ut voluptate minim. Consectetur incididunt commodo excepteur ipsum voluptate veniam aliquip duis qui. Dolor deserunt sint Lorem aliqua deserunt pariatur cupidatat veniam. Lorem ex quis fugiat et laboris consequat ad.\r\n"
        }
      this._playerServices.addPlayer(newPlay);
    }
}