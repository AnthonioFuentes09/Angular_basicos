import { Component } from '@angular/core';


@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class heroeComponent{
    public nombre: string = 'ironman';
    public edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }


    cambiarNombre():void{
        this.nombre = 'Spaiderman';
    }
    cambiarEdad():void{
        this.edad = 48;
    }
}