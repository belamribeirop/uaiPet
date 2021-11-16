import { Component, NgModule, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { ControlDialogComponent } from './control-dialog/control-dialog.component';

// Aqui! import { HttpClient } from '@angular/common/http';

import { AnimalsService } from '../Services/Animals/animals.service';

export interface MyAnimals {
  name: string;
  color: string;
  age: string;
  size: string;
  gender: string;
  adopted: boolean;
  category: string;
  raca: string;
};


export interface AnimalsData {
  id: number;
  name: string;
  category: string;
  gender: string;
};

/*
{
  "id": 1,
  "name": "fsdf",
  "color": "vdfb",
  "age": "dfv",
  "size": "garnde",
  "gender": "fem",
  "adopted": false,
  "category": "bfgbsf",
  "raca": "gfbb",

  "caracteristicas": "car1",
  "health": "saudavel",
  "adestrado": true,
}
*/


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


const ANIMAL_DATA: AnimalsData[] = [
  {id: 1, name: 'Hydrogen', category: 'teste', gender: 'H'},
  {id: 2, name: 'Helium', category: 'teste', gender: 'He'},
  {id: 3, name: 'Lithium', category: 'teste', gender: 'Li'},
];



@Component({
  selector: 'app-animal-control',
  templateUrl: './animal-control.component.html',
  styleUrls: ['./animal-control.component.scss'],
})
export class AnimalControlComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  displayedColumns: string[] = ['id', 'name', 'category', 'gender'];
  dataSource: AnimalsData[] = []; // dataSource = ANIMAL_DATA;

  constructor(
    public dialog: MatDialog,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {

    this.animalsService.getAll().subscribe((data) => {
      // Aqui!
     this.dataSource = data.map((item, index)=>{
        return {
          id: index,
          name: item.name,
          category: item.category,
          gender: item.gender
        }
      });

      console.log(this.dataSource);
    });
  }



  addAnimal() {
    console.log('addAnimal');
    let dialogRef = this.dialog.open(ControlDialogComponent, {
      height: '500px',
      width: '800px',
    });
  }
}
