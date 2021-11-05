import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'mayusculas'
})
export class MayusculasPipes implements PipeTransform {
transform(valor:string, enMayusculas:boolean =true):string{
    /* if(enMayusculas)
    {
        return valor.toUpperCase();
    }
    else{
        return valor.toLowerCase();
    } */
    //se puede resumir esto haciendo un ternario

    return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase()

}

}

