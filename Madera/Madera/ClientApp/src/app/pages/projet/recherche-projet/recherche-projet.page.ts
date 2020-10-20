import { Component, OnInit, ViewChild } from '@angular/core';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-recherche-projet',
  templateUrl: './recherche-projet.page.html',
  styleUrls: ['./recherche-projet.page.scss','./../../../app.component.scss'],
})



export class RechercheProjetPage implements OnInit {


  constructor() {

  }

  ngOnInit() {

  }

}






