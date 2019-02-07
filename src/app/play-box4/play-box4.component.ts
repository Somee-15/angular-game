import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-play-box4',
  templateUrl: './play-box4.component.html',
  styleUrls: ['./play-box4.component.css']
})
export class PlayBox4Component implements OnInit {

  
  @Input()color:boolean;
  c4:string;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log(this.color)
    if(this.color==true)
      this.c4="black";
    else
      this.c4="red";
  }
  onClick(){
    if(this.color==true)
    {

    }
  }

}
