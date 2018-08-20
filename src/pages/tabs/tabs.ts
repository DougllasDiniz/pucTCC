import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NotasPage } from '../notas/notas';
import { ProvasPage } from '../provas/provas';
import { MaisPage } from '../mais/mais';
import { Events, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotasPage;
  tab3Root = ProvasPage;
  tab4Root = MaisPage;

  //ir para a pagina de login direto das TABS
  constructor(
    public events: Events,
    public navCtrl: NavController
  ) {
    events.subscribe('user:logout', () => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}