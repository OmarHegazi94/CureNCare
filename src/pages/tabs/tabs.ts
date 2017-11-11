import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage(
  {
    name:'tabs-page'
  }
  )
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  splash = true;

  tab1Root : string;
  tab2Root : string;
  tab3Root : string;

  constructor() {
    // this.tab1Root = "ShoppingListPage"; // ERROR
    this.tab2Root = "PriceListPage";
    this.tab3Root = "AboutPage";
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 4000);
        
  }

}
