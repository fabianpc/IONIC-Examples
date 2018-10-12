import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FbLogin } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    FbLogin,
    HomePage,
    LoginPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(FbLogin)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FbLogin,
    HomePage,
    LoginPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
