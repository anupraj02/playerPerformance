import { Component,Input } from '@angular/core';
import { Player } from './player.interface';
import { orangeCapPipe } from './orangecap.pipes';
import { purpleCapPipe } from './purplecap.pipes';
import { battingAverage } from './battingavg.pipes';
import { playerServices } from './player.services';


@Component({
  selector: 'player-list',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})

export class PlayerListComponent {
    @Input() 'playerList';
    currentPlayerModal:Player;

    constructor(private _playerServices: playerServices){}
    showPlayerDetail(item){
      this.currentPlayerModal = item;
      //window.location.hash='playerdetail-container'
    }
    addNewPlayer(){
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
    deletePlayer(item){
      let res = confirm("Are you sure to delete this player?");
      if(res)
      this._playerServices.deletePlayer(item);
    }
}
