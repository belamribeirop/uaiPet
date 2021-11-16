import { Component, OnInit } from '@angular/core';

type Animal = {
  id: string;
  name: string;
  category: string;
  type: string;
  age: string;
  image: string;
};

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
  constructor() {}
  allAnimals: Animal[] = [];
  animals: Animal[] = [];
  filters = ['cachorro', 'gato', 'filhote', 'adulto'];

  // Aqui! selectedAnimals: Animal;
  selectedAnimals: Animal = {
    id: '0',
    name: 'bob',
    age: 'filhote',
    type: 'cachorro',
    category: 'vira lata',
    image: 'https://static.vecteezy.com/ti/fotos-gratis/p2/963511-filhote-de-cachorro-poodle-branco-bonito-foto.jpg'
  };

  ngOnInit(): void {

    this.allAnimals = [
      {
        id: '0',
        name: 'bob',
        age: 'filhote',
        type: 'cachorro',
        category: 'vira lata',
        image: 'https://static.vecteezy.com/ti/fotos-gratis/p2/963511-filhote-de-cachorro-poodle-branco-bonito-foto.jpg',
          // 'https://cidadeverde.com/assets/uploads/posts/e769b0d28c90b17e276c0c3423de0a2e.jpg',
      },
      {
        id: '1',
        name: 'flor',
        age: 'adulto',
        type: 'cachorro',
        category: 'poodle',
        image:
          'https://static.vecteezy.com/ti/fotos-gratis/p2/963511-filhote-de-cachorro-poodle-branco-bonito-foto.jpg',
      },
      {
        id: '2',
        name: 'diana',
        age: 'adulto',
        type: 'cachorro',
        category: 'vira lata',
        image:
          'https://static1.patasdacasa.com.br/articles/1/39/1/@/1318-vira-lata-caramelo-nao-importa-onde-voc-articles_media_mobile-4.jpg',
      },
      {
        id: '3',
        name: 'zara',
        age: 'filhote',
        type: 'cachorro',
        category: 'pastor alemao',
        image:
          'https://blog.cobasi.com.br/wp-content/uploads/2020/11/pastor-alemao-filhote-studio.png',
      },
    ];

    this.animals = [...this.allAnimals];
  }
  openDetails(id: string) {
    this.selectedAnimals = this.allAnimals[parseInt(id)];
    console.log(this.selectedAnimals);
    let modal  = document.getElementById('modalDetailsAnimal')
        modal?.classList.remove('hhidden')
        modal?.classList.add('sshow');
  }
  applyFilter(chip: string) {
    this.animals = this.allAnimals.filter(
      (a) =>
        a.category.includes(chip) ||
        a.age.includes(chip) ||
        a.type.includes(chip)
    );
  }
  applySearch(search: string) {
    this.animals = this.allAnimals.filter(
      (a) =>
        a.category.includes(search) ||
        a.age.includes(search) ||
        a.type.includes(search) ||
        a.name.includes(search)
    );
  }
}
