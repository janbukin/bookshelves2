import { Component, Input } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    providers: [BookService]
})

export class BookListComponent {
    books: Book[];

    constructor(private bookService: BookService) {
        this.books = [];
    }

    ngOnInit() {
        this.books = this.bookService.loadBooks();
    }

}