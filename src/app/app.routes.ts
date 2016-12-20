import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { BookListComponent } from './book';
import { BookCreateComponent } from './book/create';
import { BookUpdateComponent } from './book/update';
import { GenreListComponent } from './genre';
import { GenreCreateComponent } from './genre/create';
import { GenreUpdateComponent } from './genre/update';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'book',  component: BookListComponent },
    { path: 'book/create',  component: BookCreateComponent },
    { path: 'book/update/:id',  component: BookUpdateComponent },
    { path: 'genre', component: GenreListComponent },
    { path: 'genre/create', component: GenreCreateComponent },
    { path: 'genre/update/:id', component: GenreUpdateComponent },
    { path: '**',    component: NoContentComponent }
];
