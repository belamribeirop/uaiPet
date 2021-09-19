import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type Ong = {
  id: string;
  address: string;
  phone: string;
  description: string;
  name: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  userId: string;
};
@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.scss'],
})
export class OngsComponent implements OnInit {
  ongs: Ong[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getOngs();
  }
  getOngs() {
    this.http.get<Ong[]>('http://localhost:3000/abrigos').subscribe((data) => {
      this.ongs = data;
    });
  }
}
