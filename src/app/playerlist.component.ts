import { Component,Input } from '@angular/core';

export interface PlayerModal{
    id:number;
    runScored: number;
    inn: number;
    pname: string;
    company: string;
    about: string;
    matches: number;
    ballfaced: number;
    overs: number;
    wickets: number;
    maidens: number;
    runsGiven: number;
}

@Component({
  selector: 'player-list',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})

export class PlayerListComponent {
    @Input() 'playerList';
    
    currentPlayerModal:PlayerModal;
    showPlayerDetail(item){
      this.currentPlayerModal = item;
      console.log(this.currentPlayerModal.pname);
      console.log(item.pname);
    }
}
