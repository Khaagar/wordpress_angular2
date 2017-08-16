import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';

import { MenuService } from './services/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MenuService],
  
})


export class AppComponent {

  menu: any;
  activePage: any;

  constructor(private menuService: MenuService, private router: Router) { 
    menuService.getMenuByName("header-footer-menu").subscribe(res => {
      this.menu = res;

      router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.activePage = event.url;
        window.scroll(0, 0);
      });
    })

  }





}
