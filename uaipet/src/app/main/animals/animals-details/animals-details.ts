import { Component, ElementRef, OnInit, Input } from "@angular/core"

type Animal = {
    id: string;
    name: string;
    category: string;
    type: string;
    age: string;
    image: string;
  };

@Component({
    selector: 'app-animals-details',
    templateUrl: './animals-details.html',
    styleUrls: ['./animals-details.scss'],
})


export class AnimalDetailsComponent implements OnInit {

    @Input() animal: Animal;     
    constructor(private el: ElementRef) {


     }
    ngOnInit() {
        this.el.nativeElement.addEventListener('click', ()=> {
            this.close()
        })
    }
    close() {
        let modal  = document.getElementById('modalDetailsAnimal');
        modal?.classList.remove('sshow');
        modal?.classList.add('hhidden');

    }
}

