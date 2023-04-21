import { Injectable } from "@angular/core"
import { Book } from "../book-list/book";

@Injectable()
export class BookService {

    private BOOKS: Book[] = [
        new Book('123456', 'Podstawy C#', 'Scot Hanselman', 'Tech', 'Książka dla programistów'),
        new Book('456789', 'C# Zaawansowany', 'Scot Hanselman', 'Tech', 'Książka dla zaawansowanych programistów'),
        new Book('678910', 'Specjalista C#', 'Piotr Hanselman', 'Tech', 'Książka dla specjalistów C#'),
    ] 

    getBooks(): Promise<Book[]> {
        return Promise.resolve(this.BOOKS);
    } 
}