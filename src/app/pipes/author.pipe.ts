import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'nameFormat'
})

export class AuthorPipe implements PipeTransform {

    transform(value: string) {
        if(value.match("Scot")) {
            return "Bardzo dobry";
        } else if ( value.match("Piotr"))  {
            return "Średni";
        } else
        {
            return value;
        }
    }

}