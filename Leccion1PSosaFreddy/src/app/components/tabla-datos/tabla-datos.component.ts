import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Donante } from 'src/app/models/Donante';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css']
})
export class TablaDatosComponent implements OnInit {


  @Input("donantes")
  public donantes! : Donante[];

  ngOnInit(): void {
      
  }

}
