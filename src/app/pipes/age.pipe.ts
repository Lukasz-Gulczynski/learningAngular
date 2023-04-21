import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ageFormat'
})

export class AgePipe implements PipeTransform {

    transform(value: number) {
        if(value < 18) {
            return "Nieletni";
        } else if ( value > 18 && value < 35)  {
            return "Wiek średni";
        } else
        {
            return "Wiek starszy";
        }
    }

}