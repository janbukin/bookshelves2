import { Component, Input, OnInit } from '@angular/core';
import { Genre } from './genre';
import { GenreService } from './genre.service';

@Component({
    selector: 'genre-list',
    templateUrl: './genre-list.component.html',
    providers: [GenreService]
})

export class GenreListComponent implements OnInit {
    @Input() genres: Genre[];

    constructor(private genreService: GenreService) {
        this.genres = [];
    }

    ngOnInit() {
        this.genres = this.genreService.loadGenres();
    }

}