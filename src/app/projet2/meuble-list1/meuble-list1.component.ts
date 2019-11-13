import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meuble-list1',
  templateUrl: './meuble-list1.component.html',
  styleUrls: ['./meuble-list1.component.css']
})
export class MeubleList1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public dateJour = new Date();
meubles=[{libelle:'table',img:'../assets/table.jpg',prixttc:47,neuf:true},
{libelle:'armoire',img:'../assets/armoire.jpg',prixttc:258.547,neuf:false},
{libelle:'fauteuil',img:'../assets/fauteuil.jpg',prixttc:113.8,neuf:true}]

}

