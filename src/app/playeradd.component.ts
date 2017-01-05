import { Component,Input } from '@angular/core';
import { Player } from './player.interface';
import { playerServices } from './player.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'player-add',
  templateUrl: './playeradd.component.html',
  styleUrls: ['./playeradd.component.css']
})


export class PlayerAddComponent {
    form ;
    addshow = false;
    constructor(private _playerServices: playerServices){}

    ngOnInit(){
      this.form = new FormGroup({
        newPlayerName: new FormControl('',Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        newPlayerNationality: new FormControl('',Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        newPlayerAge: new FormControl('',this.ageValidator),
        newPlayerRole: new FormControl('',Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        newPlayerBatting: new FormControl('Right Handed',Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        newPlayerBowling: new FormControl('-',Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        newPlayerAbout: new FormControl('')
      });
    }

    ageValidator(control){
      let age = parseInt(control.value);
      let minVal = 1;
      let maxVal = 100;
      if(age>=minVal && age<=maxVal){
        return null
      }else{
        return {'age':true};
      }
    }
    
    addNewPlayer(){
        this.addshow = !this.addshow;
    }
    submitNewPlayer(fromValues):void{
      let newPlay = {
          "id":0,
          "pname": fromValues.newPlayerName,
          "age": fromValues.newPlayerAge,
          "nationality": fromValues.newPlayerNationality,
          "role": fromValues.newPlayerRole,
          "batstyle": fromValues.newPlayerBatting,
          "bowlstyle": fromValues.newPlayerBowling,
          "company": "",
          "matches": 0,
          "inn": 0,
          "runScored": 0,
          "highest":0,
          "ballfaced": 0,
          "overs": 0,
          "maidens": 0,
          "runsGiven": 0,
          "wickets": 0,
          "about": fromValues.newPlayerAbout
        }
        
        this._playerServices.addPlayer(newPlay);
        this.addshow = !this.addshow;
        this.ngOnInit();
    }
}