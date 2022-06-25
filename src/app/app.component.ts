/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

*/
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './core/services/data.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private data: DataService,
    private oneSignal: OneSignal,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        setTimeout(async () => {
          await this.oneSignal.startInit(environment.onesignal.appId, environment.onesignal.googleProjectNumber);
          this.oneSignal.getIds().then((data) => {
            localStorage.setItem('onesignal', data.userId);
          });
          await this.oneSignal.endInit();
        }, 1000);
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.appPages = this.data.pages;
    });
  }
}
