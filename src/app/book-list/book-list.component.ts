import { Component, OnInit } from "@angular/core";
import { BookService } from "../services/book.service";
import { Book } from "./book";

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html'
})

export class BookListComponent implements OnInit {

constructor(private bookService: BookService) {}

public books: Book[] = [];
// public selectedBook: Book = undefined as any;
// public selectedBook: Book | undefined = undefined;
public selectedBook?: Book;

    ngOnInit(): void {
    this.bookService.getBooks().then(b => this.books = b)
}
    onClick(book: Book) {
        this.selectedBook = book;
    }
    
    deselectBook(): void {
        this.selectedBook = undefined;
    }
}

