import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-gdatos',
  templateUrl: './gdatos.component.html',
  styleUrls: ['./gdatos.component.scss'],
})
export class GdatosComponent {
  loginForm : FormGroup;
  [x: string]: any;

  showModal: boolean = false;
  nombre!: string;
  apellidoPaterno!: string;
  apellidoMaterno!: string;
  correo!: string;
  institucion!: string;
  gradoEstudio!: string;
  distinciones: any = {};
  invitacion!: string;

  

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      nombre: ['',Validators.pattern('[a-zA-Z]+')],
      apellidoPaterno: ['', Validators.pattern('[a-zA-Z]+')],
      apellidoMaterno: ['', Validators.pattern('[a-zA-Z]+')],
      correo: ['',Validators.pattern('[a-zA-Z0-9]+@tese.edu.mx')]
      
    });
   }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitForm() {
    console.log("Nombre:", this.nombre);
    console.log("Apellido Paterno:", this.apellidoPaterno);
    console.log("Apellido Materno:", this.apellidoMaterno);
    console.log("Correo Electrónico:", this.correo);
    console.log("Institución Proveniente:", this.institucion);
    console.log("Grado de Estudio:", this.gradoEstudio);
    console.log("Distinciones:", this.distinciones);
    console.log("Invitación:", this.invitacion);
    this.closeModal();

    
  }
}
