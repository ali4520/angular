import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {CategoryComponent} from "./components/category/category.component";
import {TruncateTextPipe} from './truncate-text.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxPaginationModule} from "ngx-pagination";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {HomeComponent} from "./components/home/home.component";
import {NewsDetailComponent} from "./components/news-detail/news-detail.component";
import {RightMenuComponent} from './components/right-menu/right-menu.component';
import {SafeHtmlPipe} from './safe-html.pipe';
import {LoginComponent} from './components/login/login.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { RegisterComponent } from './components/register/register.component';
import { ContactsComponent } from './components/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CategoryComponent,
    TruncateTextPipe,
    HomeComponent,
    NewsDetailComponent,
    RightMenuComponent,
    SafeHtmlPipe,
    LoginComponent,
    RegisterComponent,
    ContactsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    ScrollingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: 'apiURL', useValue: 'https://mithaber.com/backend/api'},
    {provide: 'perPage', useValue: 4}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
