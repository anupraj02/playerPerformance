import { Component,Input } from '@angular/core';
import { Player } from './player.interface';
import { battingStrikeRate } from './battingstrikerate.pipes';
import { battingAverage } from './battingavg.pipes';


@Component({
  selector: 'player-detail',
  templateUrl: './playerdetail.component.html',
  styleUrls: ['./playerdetail.component.css']
})

export class PlayerDetailComponent {
    currentPlayerModal:Player;
    @Input() currentPlayer;
}
