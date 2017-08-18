import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { WindowRef } from './shared/windowRef'

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
  menu_name: "";
  activePage: any;

  constructor(private winRef: WindowRef, private menuService: MenuService, private router: Router) { 
    let wp_info = winRef.nativeWindow;
    this.menu_name = wp_info.main_menu;
    menuService.getMenuByName(this.menu_name).subscribe(res => {
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
