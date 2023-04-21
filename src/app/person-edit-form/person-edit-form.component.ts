import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'edit-form',
    templateUrl: './person-edit-form.component.html'
})

export class PersonEditFormComponent implements OnInit{
    personForm: FormGroup;

    constructor(private builder: FormBuilder, private route: ActivatedRoute, private router: Router) {
        this.personForm = this.builder.group({
            name: [null, Validators.required],
            lastName: [null, Validators.required]
        })
    }

    ngOnInit(): void {
this.route.params.subscribe(p => {
    alert(p['id']);
})

        // this.peopleService.getPersonById(id);
    }

    onClick() {
        this.personForm.patchValue({
            name: 'test'
        });
    }

    public goToAdd() {
        this.router.navigate(['/add']);
    }
}