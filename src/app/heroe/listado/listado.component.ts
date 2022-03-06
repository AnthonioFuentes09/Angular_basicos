import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ['Decimus','Wallace','Decius','Arkturux'];
  public addHeroe: string = '';


  borrarHeroe(){
    this.addHeroe  = this.heroes.shift() || '';
     
  }

  existHeroe(): boolean{
    if (this.borrarHeroe.length !== 0) {
        const valor: boolean = true;
        return valor;
    } else {
        const valor: boolean = false;
        return valor;
    } 
    
  }

}
