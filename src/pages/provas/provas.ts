import { Component } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the ProvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-provas',
  templateUrl: 'provas.html',
})
export class ProvasPage {

  constructor(
    public events: Events,
    public loginProvader: LoginProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvasPage');
  }

  /*Navegar para proxima pagina e
  remove dados do usuario do localStorage*/
  logout(){
    this.events.publish('user:logout');
    this.loginProvader.removeDadosUsuario();
  }

}
