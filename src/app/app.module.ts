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
import { FilterPageModule } from './main/pages/filter/filter.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { SortPageModule } from './main/pages/sort/sort.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx'
import { HttpErrorHandlerService } from './core/services/http-error-handler.service';
library.add(fas, far, fab);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule ,
    FilterPageModule,
    SortPageModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FontAwesomeModule],
  providers: [  StatusBar,HttpErrorHandlerService,
    SplashScreen,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },OneSignal],
  bootstrap: [AppComponent],
})
export class AppModule {}
