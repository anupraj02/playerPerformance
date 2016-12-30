import {Pipe,Input} from '@angular/core';

@Pipe({
    name:'findOrangeCap'
})
export class orangeCapPipe{
    transform(playersList,playerId){
        var highest=0;
        var pid=0;
        
        playersList.forEach(player=>{
            if(player.runScored>highest){
                highest=player.runScored;
                pid=player.id;
            }
        })
        if(pid==playerId)
            return true;
        else
            return false;
    }
}