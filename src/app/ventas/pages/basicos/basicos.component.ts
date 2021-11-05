import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

 nombreLower:string='Santiago';
 nombreUpper:string='SANTIAGO';
 nombreCompleto:string='SanTiAgo SolARi';
fecha:Date= new Date();//fecha al dia de hoy

}
