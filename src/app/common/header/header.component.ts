import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../shared/windowRef';
import { MenuService } from '../../services/menu/menu.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MenuService]
})
export class HeaderComponent implements OnInit {

  site_title: string;
  menu: Object;
  current: '';
  constructor(private winRef: WindowRef, private menuService: MenuService) {
    
  }

  ngOnInit() {
    let wp_info = this.winRef.nativeWindow;
    this.site_title = wp_info.site_title;
    this.getMenu("header-footer-menu");
  }

  setActive(item){
    console.log(item);
    this.current = item;
  }

  getMenu(string){
    return this.menuService.getMenuByName()
      .subscribe(res => {
        this.menuService.getMenuById(res[string].ID)
          .subscribe(res => {
            this.menu = res;
            console.log(this.menu);
          });
      });
  }
}
