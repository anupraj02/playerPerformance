import { Component } from '@angular/core';

export interface Player{
    id:number;
    runScored: number;
    highest: number;
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app works!';
  players = PLAYER;
}


var PLAYER: Player [] = [
  {
    "id":1,
    "pname": "Ramona Gonzales",
    "company": "BLANET",
    "matches": 11,
    "inn": 6,
    "runScored": 205,
    "highest":45,
    "ballfaced": 104,
    "overs": 9,
    "maidens": 2,
    "runsGiven": 93,
    "wickets": 8,
    "about": "Velit laborum consequat est anim veniam duis. Sunt proident aute voluptate ullamco aute sunt ea ut voluptate minim. Consectetur incididunt commodo excepteur ipsum voluptate veniam aliquip duis qui. Dolor deserunt sint Lorem aliqua deserunt pariatur cupidatat veniam. Lorem ex quis fugiat et laboris consequat ad.\r\n"
  },
  {
    "id":2,
    "pname": "Alexandra Cain",
    "company": "COMTENT",
    "matches": 14,
    "inn": 7,
    "runScored": 50,
    "highest":15,
    "ballfaced": 287,
    "overs": 19,
    "maidens": 2,
    "runsGiven": 72,
    "wickets": 6,
    "about": "Veniam ullamco et consectetur eu quis commodo non ipsum incididunt duis. Ipsum ullamco reprehenderit mollit culpa consectetur amet labore. Lorem ex reprehenderit ullamco magna sit deserunt sit. Velit qui laborum tempor adipisicing laboris non nisi nisi ut ex ipsum ex. Adipisicing aute deserunt culpa pariatur ut Lorem excepteur fugiat duis incididunt officia adipisicing pariatur culpa.\r\n"
  },
  {
    "id":3,
    "pname": "Melissa Stewart",
    "company": "ISOLOGIX",
    "matches": 10,
    "inn": 10,
    "runScored": 195,
    "highest":65,
    "ballfaced": 65,
    "overs": 11,
    "maidens": 3,
    "runsGiven": 45,
    "wickets": 6,
    "about": "Voluptate dolor id amet ex officia enim. Mollit dolore duis mollit commodo enim. Velit non id sunt minim laboris ea pariatur. Ad laborum eiusmod elit veniam non duis dolor tempor eu duis. Pariatur nulla ad fugiat ad consectetur quis qui mollit nulla proident. Dolor quis nulla culpa officia deserunt aliquip nostrud culpa magna nulla exercitation amet. Tempor et consectetur aliqua ad exercitation cillum in ad.\r\n"
  },
  {
    "id":4,
    "pname": "Dona Bryant",
    "company": "CINESANCT",
    "matches": 12,
    "inn": 6,
    "runScored": 189,
    "highest":69,
    "ballfaced": 81,
    "overs": 13,
    "maidens": 6,
    "runsGiven": 27,
    "wickets": 6,
    "about": "Aliqua id mollit sit cillum dolore est mollit dolor dolor ipsum ad nisi. Irure ipsum est consequat culpa fugiat ad laborum ullamco laboris pariatur sint ipsum. Commodo do velit enim laboris commodo culpa pariatur nulla voluptate commodo dolor occaecat culpa. Amet pariatur ullamco qui aute commodo ipsum cupidatat dolore ipsum sit deserunt.\r\n"
  },
  {
    "id":5,
    "pname": "French Daniels",
    "company": "QIMONK",
    "matches": 10,
    "inn": 6,
    "runScored": 72,
    "highest":12,
    "ballfaced": 167,
    "overs": 9,
    "maidens": 2,
    "runsGiven": 68,
    "wickets": 8,
    "about": "Voluptate commodo nisi sint esse excepteur officia consectetur ad eiusmod dolor tempor consequat culpa. Elit minim ea minim est ad dolore quis id cupidatat non. Eu occaecat nostrud cillum aute ut amet cupidatat anim adipisicing est reprehenderit. Eiusmod qui sint laborum pariatur cupidatat fugiat sunt fugiat Lorem non amet nisi. Velit eiusmod quis incididunt commodo eu anim sint in nulla.\r\n"
  },
  {
    "id":6,
    "pname": "Laurel Murray",
    "company": "SULTRAXIN",
    "matches": 15,
    "inn": 5,
    "runScored": 178,
    "highest":23,
    "ballfaced": 265,
    "overs": 8,
    "maidens": 3,
    "runsGiven": 36,
    "wickets": 0,
    "about": "Occaecat sunt do ad tempor. Dolore eiusmod pariatur culpa laboris id adipisicing amet esse consequat consectetur dolore aliqua proident. Eiusmod anim sint id proident non in voluptate aliqua cillum reprehenderit exercitation reprehenderit eu voluptate.\r\n"
  },
  {
    "id":7,
    "pname": "Anup Raj",
    "company": "SULTRAXIN",
    "matches": 15,
    "inn": 10,
    "runScored": 999,
    "highest":124,
    "ballfaced": 500,
    "overs": 8,
    "maidens": 3,
    "runsGiven": 36,
    "wickets": 10,
    "about": "Occaecat sunt do ad tempor. Dolore eiusmod pariatur culpa laboris id adipisicing amet esse consequat consectetur dolore aliqua proident. Eiusmod anim sint id proident non in voluptate aliqua cillum reprehenderit exercitation reprehenderit eu voluptate.\r\n"
  }
]
