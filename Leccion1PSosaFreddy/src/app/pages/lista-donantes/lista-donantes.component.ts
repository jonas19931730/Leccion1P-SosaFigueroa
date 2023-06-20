import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Donante } from 'src/app/models/Donante';
import { DonantesService } from 'src/app/services/donante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-donantes',
  templateUrl: './lista-donantes.component.html',
  styleUrls: ['./lista-donantes.component.css']
})
export class ListaDonantesComponent implements OnInit{

  public donantes: Donante[] = [];
  public valorRecaudado !: number ;

  constructor(
    private modalService: NgbModal,
    private router:Router,
    private donantesService : DonantesService
  ){

  }
  
  ngOnInit(): void {
    this.donantes = this.donantesService.getDonantes();
    this.valorRecaudado = this.donantesService.getValorRecaudado();
  }

  nuevoDonante(content:any){
    this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } )
                     .result.then((result=>{

                     }));
  }

  agregarDonante(event:any){
    this.donantesService.agregarNuevo(event);
    this.donantes = this.donantesService.getDonantes();
  }

  recolectar(){
    if(!this.donantesService.eliminarDonantesPlazo()){
      Swal.fire({
        title : 'Advertencia',
        text  : 'No hay donantes agregados',
        icon : 'warning'
      })
      return;
    }

    Swal.fire({
      title : 'Exito',
      text  : 'Se han recolectado los donantes disponibles',
      icon : 'warning'
    })

    this.donantes = this.donantesService.getDonantes();
    this.valorRecaudado = this.donantesService.getValorRecaudado();

  }


}
