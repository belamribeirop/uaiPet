import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

export interface Animal {
  name: string;
  color: string;
  age: string;
  size: string;
  gender: string;
  adopted: boolean;
  category: string;
  raca: string;
}

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<MyAnimals[]>('http://localhost:3000/animais');
  }
  getById(id: number) {
    return this.http.get<MyAnimals>(`http://localhost:3000/animais/${id}`);
  }
  saveAnimal(animal: Animal[]) {
    return this.http.post('http://localhost:3000/animais', animal);
  }
  updateAnimal(animal: Animal[]) {
    return this.http.put('http://localhost:3000/animais', animal);
  }
  deleteAnimal(id: number) {
    return this.http.delete(`http://localhost:3000/animais/${id}`);
  }
}
