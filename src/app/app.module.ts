import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

import { MyApp } from './app.component';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';
import { EditShoppingItemPage } from '../pages/edit-shopping-item/edit-shopping-item';
// import { AboutPage } from '../pages/about/about';
// import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage,
    // AboutPage,
    // TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Initialise AngularFire with credientials from the dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Import the AngularFireDatabaseModule to use database interactions
    AngularFireDatabaseModule,
    // IonicPageModule.forChild(AboutPage),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage,
    // AboutPage,
    // TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
