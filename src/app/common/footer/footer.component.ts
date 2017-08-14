import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../shared/windowRef';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [MenuService]
})
export class FooterComponent implements OnInit {

  menu: Object;

  constructor(private winRef: WindowRef, private menuService: MenuService) {
    
  }

  ngOnInit() {
    this.getMenu("header-footer-menu");
  }

  getMenu(string){
    this.menuService
      .getMenuByName(string)
      .subscribe(res => this.menu = res)
  }
}
