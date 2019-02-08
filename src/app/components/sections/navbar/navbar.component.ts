import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cerrar(): void {
    document.getElementById('float-button').classList.remove('pulsed');
    document.getElementById('circular-menu').classList.remove('expand');
  }

  expandir(): void {
    const floatButton = document.getElementById('float-button');
    const circularMenu = document.getElementById('circular-menu');

    floatButton.classList.toggle('pulsed');
    circularMenu.classList.toggle('expand');
  }

}