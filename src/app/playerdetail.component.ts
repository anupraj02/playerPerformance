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
  selector: 'player-detail',
  templateUrl: './playerdetail.component.html',
  styleUrls: ['./playerdetail.component.css']
})

export class PlayerDetailComponent {
    currentPlayerModal:PlayerModal;
    @Input() currentPlayer;
}
