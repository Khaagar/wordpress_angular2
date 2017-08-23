import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WindowRef } from './shared/windowRef';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CalendarModule } from 'ap-angular2-fullcalendar';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostListRecentComponent } from './posts/post-list-recent/post-list-recent.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentListRecentComponent } from './comments/comment-list-recent/comment-list-recent.component';
import { CommentSingleComponent } from './comments/comment-single/comment-single.component';

import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { TagsListComponent } from './tags/tags-list/tags-list.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './main/main.component';
import { EventsComponent } from './pages/events/events.component';
import { HubsComponent } from './pages/hubs/hubs.component';
import { DigitalInitiativesComponent } from './pages/digital-initiatives/digital-initiatives.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { TeamComponent } from './pages/team/team.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { ListComponent } from './pages/shared/list/list.component';
import { TeamListComponent } from './pages/team/team-list/team-list.component';
import { EventsCalendarComponent } from './pages/events/events-calendar/events-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    CategoriesListComponent,
    TagsListComponent,
    HeaderComponent,
    FooterComponent,
    PostListRecentComponent,
    CommentListComponent,
    CommentSingleComponent,
    CommentListRecentComponent,
    MainComponent,
    EventsComponent,
    HubsComponent,
    DigitalInitiativesComponent,
    KnowledgeComponent,
    TeamComponent,
    CarouselComponent,
    ListComponent,
    TeamListComponent,
    EventsCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Wpng2RoutingModule,
    CalendarModule,
    NgbModule
  ],
  providers: [
      WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
