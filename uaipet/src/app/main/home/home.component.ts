import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images: string[] = [
    'https://www.jornaldafranca.com.br/storage/app/media/01.%20Rosana/mulher%20com%20cachorro%20e%20gato.jpg',
    'https://horacampinas.com.br/wp-content/uploads/2021/04/ong-7-patas-covid.jpg',
    'https://i.pinimg.com/originals/fe/10/81/fe108104de7c1066e98188cdf7aaac9b.jpg',
    'https://s.zst.com.br/cms-assets/2021/02/enxoval-para-gato-1-.jpg',
    'https://petepop.ig.com.br/wp-content/uploads/2020/08/Cao-Gato-Juntos-Pixabay.jpg',
  ];
}
