import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { UserPage } from '../user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  FB_APP_ID: number = 246574579444200;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: Facebook, public nativeStorage: NativeStorage) {
    //this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doFbLogin(){
    let permissions = new Array<string>();
    let nav = this.navCtrl;

    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];

    this.fb.login(permissions)
    .then((response) => {
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      //Getting name and gender properties
      this.fb.api("/me?fields=name,gender", params)
      .then((user) => {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        this.nativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture
        })
        .then(() => {
          nav.push(UserPage);
        },(error) => {
          console.log(error);
        })
      })
    }, (error) => {
      console.log(error);
    });
}

}
