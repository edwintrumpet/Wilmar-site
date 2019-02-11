import { Component, OnInit } from '@angular/core';
import { MARIACHI } from 'src/app/mariachi';

@Component({
  selector: 'app-mariachi-carrousel',
  templateUrl: './mariachi-carrousel.component.html',
  styleUrls: ['./mariachi-carrousel.component.scss']
})
export class MariachiCarrouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  positionm: number = 34;

  mariachi = MARIACHI;

  contSizem(): number {
    return document.getElementById('cont').clientWidth;
  }

  modulom(n): number {
    return (this.contSizem()-(this.contSizem()%202))*(n);
  }

  largom(): number {
    return 34-((((this.mariachi.length)*202)-2)-this.contSizem()+68);
  }

  plusSlidesm(n: number): void{
    let mayorm = this.largom();
    let slidem = document.getElementById('slim');
    this.positionm = this.positionm + n;

    if(this.positionm>34){
      this.positionm = 34;
      slidem.style.transform =`translateX(${this.positionm}px)`;
    }else if(this.positionm<mayorm){
      this.positionm = mayorm;
      slidem.style.transform =`translateX(${this.positionm}px)`;
      this.positionm = 34-n;
    }else{
      slidem.style.transform =`translateX(${this.positionm}px)`;
    }
  }

}
