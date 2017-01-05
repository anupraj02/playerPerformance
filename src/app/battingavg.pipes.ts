import { Input, Pipe } from '@angular/core';

@Pipe({
    name: 'calcBattingAvg'
})

export class battingAverage {
    transform(runs, inn):any{
        let batAvg = 0;
        if (inn > 0){
            batAvg = runs/inn;
            return batAvg;
        }
        else {
           return 0; 
        }
    }
}
