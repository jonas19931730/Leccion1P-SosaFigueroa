import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donante } from 'src/app/models/Donante';

@Component({
  selector: 'app-nuevo-donante',
  templateUrl: './nuevo-donante.component.html',
  styleUrls: ['./nuevo-donante.component.css']
})
export class NuevoPacienteComponent {

  public form!:FormGroup;

  @Output("agregar")
  public agregar : EventEmitter<Donante> = new EventEmitter<Donante>();

  @Output("cancelar")
  public cancelar : EventEmitter<void> = new EventEmitter<void>();


  constructor(
    private fb:FormBuilder
  ){
    this.form = this.fb.group({
      apellidos       : ['',Validators.required],
      nombres         : ['',Validators.required],
      valorDonar      : [0, [Validators.required]],
      fechaEntrega    : ['',Validators.required],
    });
  }

  agregarDonante(){
    this.agregar.emit(this.form.value);
    this.cancelar.emit();
  }

  cancelarButton(){
    this.cancelar.emit();
  }




}
