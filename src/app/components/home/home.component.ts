import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('intro', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-30%)'
        }),
        animate('2s ease', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) desplazamiento(){
    let posicion = document.documentElement.scrollTop;
    let suavizar = posicion / 2;

    document.getElementById('titulo').style.transform = 'translateY(' + -posicion + 'px)';
    document.getElementById('imagen').style.transform = 'translateY(' + -suavizar + 'px)';
  }

}
