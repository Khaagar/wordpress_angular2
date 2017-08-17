import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { MainComponent } from './main/main.component';

//Pages
import { EventsComponent } from './pages/events/events.component';
import { HubsComponent } from './pages/hubs/hubs.component';
import { DigitalInitiativesComponent } from './pages/digital-initiatives/digital-initiatives.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { TeamComponent } from './pages/team/team.component';




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
    path: 'events/',
    component: EventsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'hubs/',
    component: HubsComponent
  },
  {
    path: 'hubs',
    component: HubsComponent
  },
  {
    path: 'digital-initiatives/',
    component: DigitalInitiativesComponent
  },
  {
    path: 'digital-initiatives',
    component: DigitalInitiativesComponent
  },
  {
    path: 'knowledge/',
    component: KnowledgeComponent
  },
  {
    path: 'knowledge',
    component: KnowledgeComponent
  },
  {
    path: 'team/',
    component: TeamComponent
  },
  {
    path: 'team',
    component: TeamComponent
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
