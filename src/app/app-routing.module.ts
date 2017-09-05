import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Pages
import { MainComponent } from './pages/main/main.component';
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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }
