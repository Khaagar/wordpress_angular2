import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WindowRef } from './shared/windowRef';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {RouterModule} from '@angular/router'

import { CalendarModule } from 'angular-calendar'


import { AppComponent } from './app.component';

import { Wpng2RoutingModule } from './app-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { EventsComponent } from './pages/events/events.component';
import { HubsComponent } from './pages/hubs/hubs.component';
import { DigitalInitiativesComponent } from './pages/digital-initiatives/digital-initiatives.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { TeamComponent } from './pages/team/team.component';
import { CarouselComponent } from './pages/main/carousel/carousel.component';
import { ListComponent } from './pages/shared/list/list.component';
import { TeamListComponent } from './pages/team/team-list/team-list.component';
import { EventsCalendarComponent } from './pages/events/events-calendar/events-calendar.component';

import { EventsCalendarCustomViewComponent } from './pages/events/events-calendar/events-calendar-custom-view/events-calendar-custom-view.component';
import { EventModalComponent } from './pages/events/events-calendar/event-modal/event-modal.component';
import { EventCardComponent } from './pages/events/event-card/event-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    EventsComponent,
    HubsComponent,
    DigitalInitiativesComponent,
    KnowledgeComponent,
    TeamComponent,
    CarouselComponent,
    ListComponent,
    TeamListComponent,
    EventsCalendarComponent,
    EventsCalendarCustomViewComponent,
    EventModalComponent,
    EventCardComponent
  ],
  imports: [
    Wpng2RoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CalendarModule.forRoot()
  ],
  exports:[
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    EventsComponent,
    HubsComponent,
    DigitalInitiativesComponent,
    KnowledgeComponent,
    TeamComponent,
    CarouselComponent,
    ListComponent,
    TeamListComponent,
    EventsCalendarComponent,
    EventsCalendarCustomViewComponent,
    EventModalComponent
  ],
  providers: [
      WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
