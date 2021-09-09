import { Injectable } from '@angular/core';
import { User } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  user: User | undefined = undefined;
}
