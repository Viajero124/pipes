import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.iterfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

ordenarPor:string='';

  heroes:Heroes[]=[
  {
    nombre:'Superman',
    vuela:true,
    color:Color.azul
  },
  {
    nombre:'Batman',
    vuela:true,
    color:Color.negro
  },
  {
    nombre:'Himan',
    vuela:false,
    color:Color.rojo
  },
  {
    nombre:'Hulk',
    vuela:false,
    color:Color.verde
  },
  {
    nombre:'Linterna Verde',
    vuela:true,
    color:Color.verde
  },
];
  enMayusculas:boolean=true;

 

  cambiarMayusculaMinuscula(){
this.enMayusculas=!(this.enMayusculas);
  }

  cambiarOrden(valor:string){
    this.ordenarPor=valor;
    console.log(valor);
  }
}
