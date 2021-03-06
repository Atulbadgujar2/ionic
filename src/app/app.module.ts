import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FilterPageModule } from './pages/filter/filter.module';
import { HttpClientModule } from '@angular/common/http';
import { SortPageModule } from './pages/sort/sort.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx'
library.add(fas, far, fab);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule ,
    FilterPageModule,
    SortPageModule,
    HttpClientModule,
    FontAwesomeModule],
  providers: [  StatusBar,
    SplashScreen,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },OneSignal],
  bootstrap: [AppComponent],
})
export class AppModule {}
