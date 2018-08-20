import { Component } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the MaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mais',
  templateUrl: 'mais.html',
  providers:[
    LoginProvider
  ]
})
export class MaisPage {

  constructor(
    public events: Events,
    private loginProvader: LoginProvider) {
  }

  ionViewDidLoad() {

  }

  /*Navegar para proxima pagina e
  remove dados do usuario do localStorage*/
  logout(){
    this.events.publish('user:logout');
    this.loginProvader.removeDadosUsuario();
  }

}
