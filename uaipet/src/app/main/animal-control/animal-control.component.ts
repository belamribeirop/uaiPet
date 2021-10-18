import { Component, NgModule, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { ControlDialogComponent } from './control-dialog/control-dialog.component';
import { HttpClient } from '@angular/common/http';
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
}

@Component({
  selector: 'app-animal-control',
  templateUrl: './animal-control.component.html',
  styleUrls: ['./animal-control.component.scss'],
})
export class AnimalControlComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private animalsService: AnimalsService
  ) {}
  dataSource: MyAnimals[];
  ngOnInit(): void {
    this.animalsService.getAll().subscribe((data) => {
      this.dataSource = data;
    });
  }

  displayedColumns: string[] = ['name', 'category', 'adopted', 'actions'];

  addAnimal() {
    console.log('addAnimal');
    let dialogRef = this.dialog.open(ControlDialogComponent, {
      height: '500px',
      width: '800px',
    });
  }
}
