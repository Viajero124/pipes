import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

//i18Nselect
nombre :string='Lorena';
genero:string='femenino';
invitacionMap ={
  'masculino':'invitarlo',
  'femenino':'invitarla'
}
  //i18NPlural
clientes:string[]=['Maria','Juan','Pedro'];

clientesMap={
  '=0':'no tenemos ningun cliente esperando',
  '=1':'tenemos un cliente esperando',
  '=2':'tenemos 2 clientes esperando',
  'other':'tenemos # clientes esperando'
}
cambiarCliente(){
  this.genero='masculino';
  this.nombre='Santiago'
  
}
borrarCliente(){
  this.clientes.pop();
}

//KeyValue Pipe

persona={
  nombre:'Fernando',
  edad:34,
  direccion:'Otawa,Canada'

}
//Json Pipe
heroes=[
  {
    nombre:'Superman',
    vuela:true
  },
  {
    nombre:'Spiderman',
    vuela:false
  },
  {
    nombre:'Antman',
    vuela:false
  }
];

//Async Pipe
miObservable=interval(2000)//va a emitir valore consecutivos de 0 a 1000

valorPromesa = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('Fin de la promesa')
  }, 3500);
});

}
