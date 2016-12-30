import { Component,Input } from '@angular/core';
import { Player } from './player.interface';

@Component({
  selector: 'player-detail',
  templateUrl: './playerdetail.component.html',
  styleUrls: ['./playerdetail.component.css']
})

export class PlayerDetailComponent {
    currentPlayerModal:Player;
    @Input() currentPlayer;
}
