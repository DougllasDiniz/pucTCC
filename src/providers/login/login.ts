import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let const_nome = "nome";

@Injectable()
export class LoginProvider{
  private base_path = "/basePath/";
  public dadosPost;

  constructor(
    public http: HTTP,
    public _platform: Platform,
    public events: Events,
    private nativeStorage: NativeStorage
  ) {
    if (this._platform.is('cordova')) {
      this.base_path = "http://18.231.176.32/sgc/";
    }
  }

  //recebe dados do formulário e busca no web service
  postLogin(dados){
    this.dadosPost = this.http.post(this.base_path + 'login/', dados,{});
    return this.dadosPost;
  }

  //adiciona o nome do usuario ao storage
  setDadosUsusario(dados){
      this.nativeStorage.setItem(const_nome, dados);
  }

  //remove os dados do usuário do localstorage
  removeDadosUsuario(){
    this.nativeStorage.remove(const_nome);
  }

}
