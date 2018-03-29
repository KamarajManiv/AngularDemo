import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { booksComponent } from './Book/books.component';
import { BooksListComponent } from './Book/bookslist.component';
import { PaginatePipe } from 'ngx-pagination';
import {CommonModule} from '@angular/common'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, CommonModule,FormsModule],
    declarations: [AppComponent, booksComponent, BooksListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
