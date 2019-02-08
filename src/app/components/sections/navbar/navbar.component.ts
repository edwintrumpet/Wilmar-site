import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  expandir(): void {
    const floatButton = document.getElementById('float-button');
    const circularMenu = document.getElementById('circular-menu');

    floatButton.classList.toggle('pulsed');
    circularMenu.classList.toggle('expand');
  }

  @HostListener('window:click', ['$event.target']) cerrar(e){
    if(e != document.getElementById('float-button') && e != document.getElementById('circular-menu')){
      document.getElementById('float-button').classList.remove('pulsed');
      document.getElementById('circular-menu').classList.remove('expand');
    }
  }
}