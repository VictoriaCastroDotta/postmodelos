import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Viajero } from './../../models/viajero';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent implements OnInit {
  public viajeros: Array<Viajero>;
  public nuevo = false;

  public editar = false;

  public posicionRecibida: number;

  //Variables de ViewChild para crear nuevo viajero:
  @ViewChild('cajaNuevoNombre') cajaNuevoNombre: ElementRef;
  @ViewChild('cajaNuevoApellido') cajaNuevoApellido: ElementRef;
  @ViewChild('cajaNuevoDni') cajaNuevoDni: ElementRef;
  @ViewChild('cajaNuevoFechaI') cajaNuevoFechaI: ElementRef;
  @ViewChild('cajaNuevoFechaS') cajaNuevoFechaS: ElementRef;
  @ViewChild('nuevoHab') nuevoHab: ElementRef;

  mostrarNuevoFormulario() {
    this.nuevo = true;
  }

  crearViajero() {
    var nuevoNom = this.cajaNuevoNombre.nativeElement.value;
    var nuevoApe = this.cajaNuevoApellido.nativeElement.value;
    var nuevoNuevoDni = this.cajaNuevoDni.nativeElement.value;
    var nuevoFechaI = this.cajaNuevoFechaI.nativeElement.value;
    var nuevoFechaS = this.cajaNuevoFechaS.nativeElement.value;
    var nuevoHab = this.nuevoHab.nativeElement.value;

    var viajero = new Viajero(
      nuevoNom,
      nuevoApe,
      nuevoNuevoDni,
      nuevoFechaI,
      nuevoFechaS,
      nuevoHab
    );
    this.viajeros.push(viajero);
  }

  cancelarNuevo() {
    this.nuevo = false;
  }

  //Variables de ViewChild para modificar viajero:
  @ViewChild('nombreMod') nombreMod: ElementRef;
  @ViewChild('apellidoMod') apellidoMod: ElementRef;
  @ViewChild('dniMod') dniMod: ElementRef;
  @ViewChild('fechaInMod') fechaInMod: ElementRef;
  @ViewChild('fechaSaMod') fechaSaMod: ElementRef;
  @ViewChild('habMod') habMod: ElementRef;

  eliminarViajero(event) {
    var posicionRecibida = parseInt(event);
    this.viajeros.splice(posicionRecibida, 1);
  }

  activarEdicion(event) {
    this.editar = true;
    this.posicionRecibida = parseInt(event);
  }

  updateViajero() {
    //Recojo variables de formulario con Native Element:
    var nombre = this.nombreMod.nativeElement.value;
    var apellido = this.apellidoMod.nativeElement.value;
    var dni = this.dniMod.nativeElement.value;
    var fechaI = this.fechaInMod.nativeElement.value;
    var fechaS = this.fechaSaMod.nativeElement.value;
    var hab = this.habMod.nativeElement.value;

    if (nombre != '') {
      this.viajeros[this.posicionRecibida].nombre = nombre;
    }
    if (apellido != '') {
      this.viajeros[this.posicionRecibida].apellido = apellido;
    }
    if (dni != '') {
      this.viajeros[this.posicionRecibida].dni = dni;
    }
    if (fechaI != '') {
      this.viajeros[this.posicionRecibida].fechaIngreso = fechaI;
    }
    if (fechaS != '') {
      this.viajeros[this.posicionRecibida].fechaSalida = fechaS;
    }
    if (hab != '') {
      this.viajeros[this.posicionRecibida].habitacion = hab;
    }
  }

  cancelarEditar() {
    this.editar = false;
  }

  constructor() {
    this.viajeros = [
      new Viajero(
        'Laura',
        'Gonzalez',
        '12345678A',
        '12/10/2020',
        '21/10/2020',
        '2A'
      ),
      new Viajero(
        'Paula',
        'Cupido',
        '12775678C',
        '09/09/2020',
        '21/09/2020',
        '3A'
      ),
      new Viajero(
        'Pedro',
        'Martínez',
        '12345128Q',
        '01/12/2020',
        '21/12/2020',
        '4B'
      ),
    ];
  }

  ngOnInit(): void {}
}
