export class Viajero {
  //MODELO CLIENTE:
  //Constructor forma 1:
  constructor(
    public nombre: string,
    public apellido: string,
    public dni: string,
    public fechaIngreso: string,
    public fechaSalida: string,
    public habitacion: string
  ) {}

  //Constructor forma 2:
  // public nombre: string;
  // public apellido: string;
  // public dni: number;
  // public fechaIngreso : string;
  // public fechaSalida : string;
  // public habitacion : string;

  // constructor(nombre, apellido, dni, fechaIngreso, fechaSalida, habitacion ){
  //   this.nombre = nombre;
  //   this.apellido = apellido;
  //   this.dni = dni;
  //   this.fechaIngreso = fechaIngreso;
  //   this.fechaSalida = fechaSalida;
  //   this.habitacion = habitacion;
  // }
}
