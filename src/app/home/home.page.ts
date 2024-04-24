import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setup();
    this.uiBind();
  }

  private setup(): void {
    const mainNavItems = document.getElementById('mainnav')?.querySelectorAll('li:not(:last-child)');
    if (mainNavItems) {
      mainNavItems.forEach(item => item.classList.add('invisible'));
    }
  }

  private uiBind(): void {
    const mainNav = document.getElementById('mainnav');
    if (mainNav) {
      mainNav.addEventListener('click', (event) => {
        event.preventDefault();
        const mainNavItems = mainNav.querySelectorAll('li:not(:last-child)');
        mainNavItems.forEach(item => {
          item.classList.toggle('animate');
          item.classList.toggle('invisible');
        });
      });
    }
  }

  guardar() {
    // Aquí puedes agregar la lógica para guardar la fecha
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log('Archivo seleccionado:', file);
    // Aquí puedes manejar el archivo seleccionado, como enviarlo a un servidor.
  }

  uploadFile() {
    console.log('Subir archivo...');
    // Aquí puedes agregar la lógica para subir el archivo al servidor o manejarlo de otra manera.
  }
}
