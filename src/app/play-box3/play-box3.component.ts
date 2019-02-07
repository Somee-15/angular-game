import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-play-box3',
  templateUrl: './play-box3.component.html',
  styleUrls: ['./play-box3.component.css']
})
export class PlayBox3Component implements OnInit {

  
  @Input()color:boolean;
  c3:string;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log(this.color)
    if(this.color==true)
      this.c3="black";
    else
      this.c3="red";
  }
  onClick(){
    if(this.color==true)
    {

    }
  }

}
