import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StarterPage } from '../pages/starter-page/starter-page';
import { SearchMasterPage } from '../pages/search-master/search-master';
import { SearchResultsPage } from '../pages/search-results/search-results';

import { cityFilterPipe } from './pipes/city.pipe';
import { beautyFilterPipe } from './pipes/beauty-service.pipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    StarterPage,
    SearchMasterPage,
    SearchResultsPage,
    cityFilterPipe,
    beautyFilterPipe,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    StarterPage,
    SearchMasterPage,
    SearchResultsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
