import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>

        <!--los eventos se inician con parentesis-->
        <!--No se aconseja poner logica en el componente html-->

        <!--Ejercicio1 Video 10-->

        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular('add')"> +{{base}} </button>

        <span (change)="EsCero()">{{numero}}</span>

        <button (click)="acumular('rest')"> -{{base}} </button>
    `
})

export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
    
    acumular( valor: string){
        if (valor == 'add') {
        this.numero += this.base;
        }
        if (valor == 'rest') {
        this.numero -= this.base;
        }
    }

    EsCero(){
        if (this.numero <= 0) {
        this.numero = 0 ;     
        }

    }

}