import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'vuela'
})
export class VuelaPipes implements PipeTransform {
transform(valor:boolean):string{
    /* if(enMayusculas)
    {
        return valor.toUpperCase();
    }
    else{
        return valor.toLowerCase();
    } */
    //se puede resumir esto haciendo un ternario

    return (valor) ? 'vuela' : 'No vuela';

}

}

