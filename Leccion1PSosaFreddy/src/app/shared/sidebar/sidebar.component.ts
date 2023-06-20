import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor(
    private router:Router
  ){
  }

  irHome(){
    this.router.navigateByUrl('/app/main');

  }

  irDonantes(){
    this.router.navigateByUrl('/app/main/donantes');
  }
  
  irContacto(){
    this.router.navigateByUrl('/app/main/contacto');
  }

}
