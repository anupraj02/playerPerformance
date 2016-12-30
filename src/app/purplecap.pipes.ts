import {Pipe,Input} from '@angular/core';

@Pipe({
    name:'findPurpleCap'
})
export class purpleCapPipe{
    transform(playersList,playerId){
        var highest=-1;
        var pid=0;
        
        playersList.forEach(player=>{
            if(player.wickets>highest){
                highest=player.wickets;
                pid=player.id;
            }
        })
        if(pid==playerId)
            return true;
        else
            return false;
    }
}