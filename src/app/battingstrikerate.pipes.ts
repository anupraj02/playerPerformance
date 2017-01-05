import {Pipe,Input} from '@angular/core';

@Pipe({
    name:'calcBattingStrikeRate'
})
export class battingStrikeRate{
    transform(runs,balls):any{
        console.log(runs+"ppppp"+balls);
        let strike=0;
        strike = (runs/balls)*100;
        
        if(balls > 0)
            return strike;
        else
            return 0;
    }
}