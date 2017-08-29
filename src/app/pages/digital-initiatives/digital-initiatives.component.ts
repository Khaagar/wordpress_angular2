import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { PagesService } from '../pages.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-digital-initiatives',
  templateUrl: './digital-initiatives.component.html',
  styleUrls: ['./digital-initiatives.component.scss'],
  providers: [PagesService]
})
export class DigitalInitiativesComponent implements OnInit {

  page: Page;

  tmpItems: Object[]=[{
    title: 'Item1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag1','tag2','tag3']
  },
  {
    title: 'Item2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag2','tag3']
  },
  {
    title: 'Item3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag1','tag3','tag4']
  },
  {
    title: 'Item4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag2','tag3']
  },
  {
    title: 'Item5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag3']
  },
  {
    title: 'Item6',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag1','tag2','tag4']
  },
  {
    title: 'Item7',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag1','tag2','tag3']
  },
  {
    title: 'Item8',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag2','tag3']
  },
  {
    title: 'Item9',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag1','tag3','tag4']
  },
  {
    title: 'Item10',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag2','tag3']
  },
  {
    title: 'Item11',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    email: 'john@doe.com',
    tags: ['tag3','tag6']
  },
];
adjustedCollection: any = this.sliceCollection(this.tmpItems);
allTags: any = this.getAllTags(this.tmpItems);
activeTag:string = 'Choose a tag';
  
    constructor( private pagesService: PagesService, private route: ActivatedRoute ) { }
  
    getPage(slug){
      this.pagesService
        .getPage(slug)
        .subscribe(res => {
          this.page = res[0];
        });
    }
  
    ngOnInit() {
         this.getPage("digital-initiatives")

    }

    getAllTags(collection){
      let tmpTags = [];
      for(let i=0; i<collection.length;i++){
        let item = collection[i];
        for(let j=0;j<item['tags'].length;j++){
          let tag = item['tags'][j]
          if (!tmpTags.find(x=>x===tag)){
            tmpTags.push(tag)
          }
        }
      }
      return tmpTags;
    }

    sliceCollection(collection,tag?){
      if(tag){
        if (tag!='all'){
          collection=collection.filter(x=>x.tags.find(y=>y==tag));
        }
      }
      let tmp = []; 
      for(let i=0;i<3;i++){
        var col = [];
        for(let j=i;j<collection.length;j+=3){
          var xxx = collection[j];
          xxx['iter'] = j;
          col.push(xxx);
        }
        tmp.push(col);
      }
      return tmp;
    }
  
    selectTag(tag){
      this.activeTag = tag;
      this.adjustedCollection = this.sliceCollection(this.tmpItems,tag);
    }
  }