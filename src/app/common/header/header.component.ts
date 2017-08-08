import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../shared/windowRef';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  site_title: string;

  constructor(private winRef: WindowRef) {
    
  }

  ngOnInit() {
    let wp_info = this.winRef.nativeWindow;
    this.site_title = wp_info.site_title;
  }

}
