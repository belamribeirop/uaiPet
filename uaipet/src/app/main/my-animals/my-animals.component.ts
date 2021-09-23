import { Component, NgModule, OnInit } from '@angular/core';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';

export interface MyAnimals {
  name: string;
  position: number;
  adopted: boolean;
  category: string;
  actions: any;
}
const ANIMALS_DATA: MyAnimals[] = [
  {position: 1, name: 'Georgia', adopted: true, category: 'dog', actions: ''},
  {position: 2, name: 'Bob', adopted: false, category: 'dog', actions: ''},
  {position: 3, name: 'Valentina', adopted: false, category: 'cat', actions: ''},
  {position: 4, name: 'Peaches', adopted: true, category: 'cat', actions: ''},
  {position: 5, name: 'Duncan', adopted: false, category: 'hamster', actions: ''},
  {position: 6, name: 'Mel', adopted: false, category: 'dog', actions: ''},
  {position: 7, name: 'Danilo', adopted: true, category: 'rabbit', actions: ''},
  {position: 8, name: 'Eddy', adopted: true, category: 'dog', actions: ''},
];


@Component({
  selector: 'app-my-animals',
  templateUrl: './my-animals.component.html',
  styleUrls: ['./my-animals.component.scss']
})
export class MyAnimalsComponent implements OnInit  {
  ngOnInit(): void {}
  displayedColumns: string[] = ['position', 'name', 'adopted', 'category'];
  dataSource = ANIMALS_DATA;
}
