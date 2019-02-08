import { Component, OnInit } from '@angular/core';
import { OBSEQUIOS } from 'src/app/obsequios';

@Component({
  selector: 'app-obsequios-carrousel',
  templateUrl: './obsequios-carrousel.component.html',
  styleUrls: ['./obsequios-carrousel.component.scss']
})
export class ObsequiosCarrouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  position: number = 34;

  obsequios = OBSEQUIOS;

  contSize(): number {
    return document.getElementById('cont').clientWidth;
  }

  modulo(n): number {
    return (this.contSize()-(this.contSize()%202))*(n);
  }

  largo(): number {
    return 34-((((this.obsequios.length)*202)-2)-this.contSize()+68);
  }

  plusSlides(n: number): void{
    let mayor = this.largo();
    let slide = document.getElementById('sli');
    this.position = this.position + n;

    if(this.position>34){
      this.position = 34;
      slide.style.transform =`translateX(${this.position}px)`;
    }else if(this.position<mayor){
      this.position = mayor;
      slide.style.transform =`translateX(${this.position}px)`;
      this.position = 34-n;
    }else{
      slide.style.transform =`translateX(${this.position}px)`;
    }
  }

}
