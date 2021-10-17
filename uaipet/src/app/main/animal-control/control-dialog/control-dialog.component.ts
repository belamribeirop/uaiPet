import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-control-dialog',
  templateUrl: './control-dialog.component.html',
  styleUrls: ['./control-dialog.component.scss'],
})
export class ControlDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ControlDialogComponent>) {}

  ngOnInit(): void {}
}
