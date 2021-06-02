import { Component, OnChanges ,Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input()//permite que a variavel abaixo receba valor em outro componente(a variavel será transformada em um atributo de uma tag html do componente)
  rating: number = 0;

  starWidth: number;
  
  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5;
  }
}