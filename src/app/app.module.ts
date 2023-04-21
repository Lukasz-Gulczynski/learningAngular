import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';
import { TestComponent } from './test/test.component';
import { BookListComponent } from './book-list/book-list.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { LogService } from './services/log.service';
import { BookService } from './services/book.service';
import { AgePipe } from './pipes/age.pipe';
import { AuthorPipe } from './pipes/author.pipe';
import { PersonEditFormComponent } from './person-edit-form/person-edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    TestComponent,
    BookListComponent,
    DisplayBookComponent,
    AgePipe,
    AuthorPipe,
    PersonEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LogService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
