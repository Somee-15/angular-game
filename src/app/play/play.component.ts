import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { timer } from 'rxjs';
import {PlayerService} from '../player.service'

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  timeLeft:number=60;
  score:number=0;
  oldScore:number;
  interval;

  interval1;

  c1=true;
  c2=false;
  c3=false;
  c4=false;

  


  timestamp=1000;


  constructor(private router:Router,private playerService:PlayerService) { }

  ngOnInit() {
    this.interval=setInterval(()=>{
    if (this.timeLeft>0) {
      this.timeLeft--; 
      this.change();
    }
    else{

      clearInterval(this.interval);
      this.playerService.setplayerScore(this.score);   
      this.switchtoScore();
      
      
    }
  },1000)
  }

  switchtoScore(){
    this.playerService.setPlayersDetails();
    this.router.navigate(['/','gameover']);
  }
  
  



  randomInter(){
    this.c1=false;
    this.c2=false;
    this.c3=false;
    this.c4=false;
    let number = Math.floor(Math.random() * 4 + 1 );
    console.log(number);
    if(number==1)
    {
      this.c1=true;
    }
    else if(number==2)
    {
      this.c2=true;
    }
    else if( number==3)
    {
      this.c3=true;
    }
    else
    {
      this.c4=true;
    }
  }

  change(){
    this.interval1= setInterval(()=>{

      if(this.timeLeft>0){
        this.randomInter();
      
      }
      else{
        clearInterval(this.interval1);
      } 
    },this.timestamp)
  }

  

  onClick(value:boolean){
    if(value==true){
      
      this.score=this.score+10;
      if(this.score>=50 && this.score<100)
      {
        this.timestamp=999
      }
      else if(this.score>=100 && this.score<150)
      {
        this.timestamp=998
      }
      else if(this.score>=150 && this.score<=200)
      {
        this.timestamp=997
      }
      else if(this.score>=200 && this.score<=250)
      {
        this.timestamp=996
      }
      else if(this.score>=250 && this.score<300)
      {
        this.timestamp=992
      }
      else if(this.score>=350 )
      {
        this.timestamp=990
      }

    }
        else{
          this.score=this.score-5;
        }      

      console.log(this.score);
}

  
}