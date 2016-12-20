import { Injectable } from '@angular/core';
import { Genre } from './genre'

@Injectable()
export class GenreService {

    public loadGenres() {
        let genres: Genre[] = [];
        let store = require('../data/store');
        let genreStore = store.genres;

        for(let i=0; i< genreStore.length; i++) {

            let genre = new Genre();

            for(let property in genreStore[i]) {
                if (genre[property] !== 'undefined') {
                    genre[property] = genreStore[i][property];
                }
            }

            genres.push(genre);
        }

        return genres;
    }

}