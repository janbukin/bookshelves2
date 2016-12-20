import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
    selector: 'book-update',
    templateUrl: 'book.update.component.html',
    providers: [BookService]
})

export class BookUpdateComponent implements OnInit {

    book: Book;

    constructor(private booService: BookService, private route: ActivatedRoute) {}

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.book = this.booService.getBook(id);//.then(book => this.book = book);

        // let id: number;
        // this.book = this.route.params.subscribe(params => {
        //     id = +params['id'];
        //     return this.booService.getBook(id);
        // });
    }

    updateBook() {
        console.log("Book was updated!");
    }
}