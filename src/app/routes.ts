import {AppComponent} from './app.component';
import {Routes} from '@angular/router';
import {CategoryComponent} from './components/category/category.component';
import {HomeComponent} from './components/home/home.component';
import {NewsDetailComponent} from './components/news-detail/news-detail.component';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ContactsComponent} from "./components/contacts/contacts.component";

export const appRoutes: Routes = [
  {path: 'anasayfa', component: HomeComponent},
  {path: 'haber/:slug', component: NewsDetailComponent},
  {path: 'kategori/:slug', component: CategoryComponent},
  {path: 'giris-yap', component: LoginComponent},
  {path: 'kayit-ol', component: RegisterComponent},
  {path: 'iletisim', component: ContactsComponent},
  {path: '**', redirectTo: 'anasayfa', pathMatch: 'full'}
];
