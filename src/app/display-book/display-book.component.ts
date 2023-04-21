import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../book-list/book";

@Component({
    selector: 'display-book',
    templateUrl: './display-book.component.html'
})

export class DisplayBookComponent {
    @Input() ISBN: string = '';
    @Input() author: string = '';
    @Input() title: string = '';
    @Input() genre: string = '';
    @Input() description: string = '';

    @Output() deselect: EventEmitter<void> = new EventEmitter<void>();

    onClick(): void {
        this.deselect.emit();
    }

}