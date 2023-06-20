import { Injectable } from '@angular/core';
import { Donante } from '../models/Donante';

@Injectable({
  providedIn: 'root'
})
export class DonantesService {


  donantes : Donante[] = [];

  valorRecaudado : number = 0;

  constructor() { }

  agregarNuevo(donante:Donante){
    this.donantes.push(donante);
  }

  eliminarDonantesPlazo = () => {

    if(this.donantes.length == 0){
      return false;
    }

    this.donantes.forEach((donante)=>{
        
        if(donante.fechaEntrega.toString() == this.convertirFecha(new Date())){
          this.valorRecaudado += donante.valorDonar;
        }
    });

    this.donantes = this.donantes.filter((donante)=>donante.fechaEntrega.toString() != this.convertirFecha(new Date()))

    return true;
  }

  getValorRecaudado = () => {
    return this.valorRecaudado;
  }

  getDonantes(){
    return this.donantes;
  }

  convertirFecha(fecha: Date): string {
    const year = fecha.getFullYear();
    const month = ("0" + (fecha.getMonth() + 1)).slice(-2); 
    const day = ("0" + fecha.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
