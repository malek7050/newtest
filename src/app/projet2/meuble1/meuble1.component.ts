import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-meuble1',
  templateUrl: './meuble1.component.html',
  styleUrls: ['./meuble1.component.css']
})
export class Meuble1Component implements OnInit {
 @Input() msg;
  constructor() { }

  ngOnInit() {
  }
b:boolean=false;
fonc(){this.b=true;}
}
