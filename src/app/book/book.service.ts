import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookService {

    private store: any;

    constructor() {
        this.store = require('../data/store');
    }

    public loadBooks() {
        let books: Book[] = [];
        let bookStore = this.store.books;

        for(let i=0; i< bookStore.length; i++) {

            let book = new Book();

            for(let property in bookStore[i]) {
                if (book[property] !== 'undefined') {
                    book[property] = bookStore[i][property];
                }
            }

            books.push(book);
        }

        return books;
    }

    public getBook(id: number) {
        return new Book();
    }

    public addBook() {

    }

    public updateBook() {

    }

}