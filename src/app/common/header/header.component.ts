import { Component, OnInit, Input } from '@angular/core';
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
  @Input() menu: any;
  @Input() activePage: any;
  constructor(private winRef: WindowRef, private menuService: MenuService) {
    
  }

  ngOnInit() {
    let wpInfo = this.winRef.wpData;
    this.site_title = wpInfo.site_title;
  }


  getMenu(string){
    this.menuService.getMenuByName(string).subscribe(res => this.menu)
  }
}
