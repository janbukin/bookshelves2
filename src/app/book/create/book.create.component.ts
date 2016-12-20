import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
    selector: 'book-create',
    templateUrl: 'book.create.component.html'
})

export class BookCreateComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit(): void {
    }

    addBook() {

        this.router.navigate(['/book']);
    }
}