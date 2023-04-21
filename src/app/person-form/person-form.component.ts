import { NgFor } from "@angular/common";
import {Component} from "@angular/core";
import { Person } from "./person";
import { LogService } from "../services/log.service";
import { Route, Router } from "@angular/router";


@Component({
    selector: 'person-form',
    templateUrl: './person-form.component.html'
})

export class PersonFormComponent
{
    constructor(private logService: LogService, private router: Router) {}

    public person: Person = new Person('', '', 0, '', new Date());

    public professions = ['Developer', 'Architekt', 'Programista'];

    public onFormSubmit()
    {
        alert(JSON.stringify(this.person));
        this.logService.info(JSON.stringify(this.person));
    }

    public btnClick()
    {
        alert(JSON.stringify(this.person));
        this.logService.info(JSON.stringify(this.person));


        this.isNameNullOrEmpty = true;
        this.isLastNameNullOrEmpty = true;

        if(this.person.name === '')
        {
            this.isNameNullOrEmpty = true;
        } else {
            this.isNameNullOrEmpty = false;
        }

        if(this.person.name === '')
        {
            this.isLastNameNullOrEmpty = true;
        } else {
            this.isLastNameNullOrEmpty = false;
        }
    }

    public isNameNullOrEmpty: boolean = false;
    public isLastNameNullOrEmpty: boolean = false;
    public goToEdit() {
        this.router.navigate(['/edit', 1]);
    }
}


