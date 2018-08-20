import { Component } from '@angular/core';
import { LoginProvider } from '../../providers/login/login';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[
    LoginProvider
  ]
})
export class HomePage {
  //ira receber os dados do json do usuario
  public dadosUser;

  constructor(
    private nativeStorage: NativeStorage
  ) {

  }

  ionViewDidLoad() {
    //captura os dados do secureStorage e atribui a variavel dadosUser
    this.nativeStorage.getItem('nome').then(
      data => {
        this.dadosUser = data; 
      }      
    );      
  }
  
}
