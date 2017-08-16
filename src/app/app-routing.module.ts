import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { PageSingleComponent } from './pages/pages-single/page-single.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    
  },
  {
    path: 'posts/:id',
    component: PostSingleComponent,
  },
  {
    path: 'posts/:id/',
    component: PostSingleComponent,
  },
  {
    path: ':slug/',
    component: PageSingleComponent
  },
  {
    path: ':slug',
    component: PageSingleComponent
  },
  {
    path: 'posts/:property/:slug',
    component: PostListComponent
  },
  {
    path: 'posts/:property/:slug/',
    component: PostListComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }
