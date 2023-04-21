import {  Component, OnDestroy, OnInit } from "@angular/core";
import { Person } from "../person-form/person";

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {


    ngOnDestroy(): void {
        this.people = [];
    }

    ngOnInit(): void {
        this.getPeople().then(p => this.people = p);

    }

    public people: Person[] = [];

    public getPeople() : Promise<Person[]> {
        
        const people: Person[] = [new Person('Łukasz', 'Gulczyński', 33, 'Developer', new Date())];

        return Promise.resolve<Person[]>(people)
    }
}