import { NgModule } from '@angular/core';
//primeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    
  ],
  exports:[
  ButtonModule,
  CardModule,
  MenubarModule,
  FieldsetModule,
  ToolbarModule,
  TableModule
  ]
})
export class PrimeNgModule { }
