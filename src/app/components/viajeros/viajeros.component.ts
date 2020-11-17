import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Viajero } from './../../models/viajero';

@Component({
  selector: 'app-viajeros',
  templateUrl: './viajeros.component.html',
  styleUrls: ['./viajeros.component.css'],
})
export class ViajerosComponent implements OnInit {
  @Input() viajero: Viajero;
  @Input() posicion: number;
  @Output() eliminarViajero = new EventEmitter();
  @Output() activarEdicion = new EventEmitter();

  constructor() {}

  deleteViajero() {
    this.eliminarViajero.emit(this.posicion);
  }

  editarViajero() {
    this.activarEdicion.emit(this.posicion);
  }

  ngOnInit(): void {}
}
