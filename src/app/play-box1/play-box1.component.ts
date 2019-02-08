import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-play-box1',
  templateUrl: './play-box1.component.html',
  styleUrls: ['./play-box1.component.css']
})
export class PlayBox1Component implements OnInit {

  

  @Input()color:boolean;
  c1:string;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log(this.color)
    if(this.color==true)
      this.c1="black";
    else
      this.c1="red";
  }
  onClick(){
    if(this.color==true)
    {

    }
  }

}


