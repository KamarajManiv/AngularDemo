import { Component } from '@angular/core';
import { Employee } from './modal';


@Component({
    selector: 'list-book',
    templateUrl: 'app/Book/bookslist.component.html'

})
export class BooksListComponent {
    constructor() {
        this.curPage = 1;
        this.pageSize = 5;
    }
    Emp: Employee[];
    curPage: number;
    pageSize: number;
    find: number = 0;
    public BookId: string;
    name: string;
    author: string;
    NOP: string;
    Date: string;
    booklist: any[] = [
        { BookId: '101', Bookname: 'book1', Bookauthor: "auth1", Booknop: '100', Bookdate: '01/01/2018' },
        { BookId: '102', Bookname: 'book2', Bookauthor: "auth2", Booknop: '200', Bookdate: '01/02/2018' },
        { BookId: '103', Bookname: 'book3', Bookauthor: "auth3", Booknop: '300', Bookdate: '01/03/2018' },
        { BookId: '104', Bookname: 'book4', Bookauthor: "auth4", Booknop: '400', Bookdate: '01/04/2018' },
        { BookId: '105', Bookname: 'book5', Bookauthor: "auth5", Booknop: '500', Bookdate: '01/05/2018' },
        { BookId: '106', Bookname: 'book6', Bookauthor: "auth6", Booknop: '600', Bookdate: '01/06/2018' },
        { BookId: '107', Bookname: 'book7', Bookauthor: "auth7", Booknop: '700', Bookdate: '01/07/2018' },
        { BookId: '108', Bookname: 'book8', Bookauthor: "auth8", Booknop: '800', Bookdate: '01/08/2018' },
        { BookId: '109', Bookname: 'book9', Bookauthor: "auth9", Booknop: '900', Bookdate: '01/09/2018' },
        { BookId: '110', Bookname: 'book10', Bookauthor: "auth10", Booknop: '100', Bookdate: '01/10/2018' },
        { BookId: '111', Bookname: 'book11', Bookauthor: "auth11", Booknop: '200', Bookdate: '01/11/2018' },
        { BookId: '112', Bookname: 'book12', Bookauthor: "auth12", Booknop: '300', Bookdate: '01/12/2018' },
        { BookId: '113', Bookname: 'book13', Bookauthor: "auth13", Booknop: '400', Bookdate: '01/13/2018' },
    ];
    numberOfPages() {
        return Math.ceil(this.booklist.length / this.pageSize);
    };
    getbookbyid(id: string) {
        debugger;
        this.Emp = this.booklist.filter(book => book.BookId == id);
        this.find = 1;
        this.BookId = this.Emp[0].BookId;
        this.name = this.Emp[0].Bookname;
        this.author = this.Emp[0].Bookauthor;
        this.NOP = this.Emp[0].Booknop;
        this.Date = this.Emp[0].Bookdate;

    }
    public Edit(): void {
        debugger
        var aa = this.BookId;
        this.booklist.find(book => book.BookId == this.BookId).Bookname = this.name;
        this.booklist.find(book => book.BookId == this.BookId).Bookauthor = this.author;
        this.find = 0;
    }
    noEdit() {
        this.find = 0;

    }
}