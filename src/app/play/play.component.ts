import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  timeLeft:number=60;
  score:number=0;
  interval;

  c1=false;
  c2=false;
  c3=false;
  c4=false;

  


  constructor(private router:Router) { }

  ngOnInit() {
    setInterval(()=>{
    if (this.timeLeft>0) {
      this.timeLeft--;
      
      this.randomInter();
      
    }
    else{

      this.router.navigate(['/','gameover']);
    }
  },1000)
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

  onClick(value:boolean){
    if(value==true){
      this.score=this.score+10;
    }
      else{

        if(this.score==0){
          this.score=0;
        }
        else{
          this.score=this.score-5;
        }      

     
      }
      console.log(this.score);
}

  
}