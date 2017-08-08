import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  providers: [CategoriesService]
})
export class CategoriesListComponent implements OnInit {

  categories: Category[];
  name: string = 'category';

  constructor( private categoriesService: CategoriesService, private route: ActivatedRoute ) { }

  getCategories(){
    this.categoriesService
      .getCategories()
      .subscribe(res => {
        this.categories = res;
      });
  }

  ngOnInit() {
       this.getCategories()


  }

}
