import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AnimalsService } from '../../Services/Animals/animals.service';

@Component({
  selector: 'app-control-dialog',
  templateUrl: './control-dialog.component.html',
  styleUrls: ['./control-dialog.component.scss'],
})
export class ControlDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ControlDialogComponent>,
    private fb: FormBuilder,
    private animalsService: AnimalsService
  ) {}

  animal = this.fb.group({
    name: ['', Validators.required],
    caracteristicas: ['', Validators.required],
    gender: ['', Validators.required],
    health: ['', Validators.required],
    size: ['', Validators.required],
    age: ['', Validators.required],
    color: ['', Validators.required],
    raca: ['', Validators.required],
    category: ['', Validators.required],
    adestrado: ['', Validators.required],
    adopted: ['', Validators.required],
  });

  ngOnInit(): void {}
  saveAnimal() {
    const animal = this.animal.value;
    console.log(animal);
    this.animalsService.saveAnimal(animal).subscribe((data: any) => {
      this.closeDialog();
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
