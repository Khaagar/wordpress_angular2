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
    this.getMenu("header-menu");
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
