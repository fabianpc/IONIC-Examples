import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';

@Component({
  templateUrl: 'app.html'
})
export class FbLogin {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public nativeStorage: NativeStorage) {
    platform.ready().then(() => {
      let env = this;
      this.nativeStorage.getItem('user')
      .then( function (data) {
        // user is previously logged and we have his data
        // we will let him access the app
        env.nav.push(UserPage);
        env.splashScreen.hide();
      }, function (error) {
        //we don't have the user data so we will ask him to log in
        env.nav.push(LoginPage);
        env.splashScreen.hide();
});
      statusBar.styleDefault();
    });
  }
}
