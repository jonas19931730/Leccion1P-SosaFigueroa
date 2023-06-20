import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaDatosComponent } from './tabla-datos/tabla-datos.component';
import { NuevoPacienteComponent } from './nuevo-donante/nuevo-donante.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TablaDatosComponent,
    NuevoPacienteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    TablaDatosComponent,
    NuevoPacienteComponent
  ]
})
export class ComponentsModule { }
