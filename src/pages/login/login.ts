import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginProvider } from '../../providers/login/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  providers:[
    LoginProvider
  ]
})
export class LoginPage {
  public validarUser;
  private todo: FormGroup;
  public mensagemEmail;
  public mensagemSenha;
  public erroEmail;
  public erroSenha;
  public tipoDeSenha: boolean;
  public plataform: Platform;
  private corteString;
 
  constructor(
    public navCtrl: NavController,
    private loginProvader: LoginProvider,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController
    ) {
      //pega os dados do formulario
      this.todo = this.formBuilder.group({
        email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
        senha: ['',Validators.compose([Validators.minLength(6), Validators.maxLength(16), Validators.required])]
      });

      
  }

 
  //recarregar a página
  doRefresh(refresher) {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    refresher.complete();
  }

  //faz a validadação dos dados
  validaDados() {
    this.mensagemEmail = "";
    this.mensagemSenha = "";   
    if(!this.todo.valid){
      if(!this.todo.get('email').valid){
        this.erroEmail = true;
        this.mensagemEmail = "Email Inválido!!!";
      }

      if(!this.todo.get('senha').valid){
        this.erroSenha = true;
        this.mensagemSenha = "Senha menor que 6 caracteres!!!"
      }
    }else{
        this.logForm();      
    }
  }

  //visualizar senha
  visualizarSenha(){
    this.tipoDeSenha = !this.tipoDeSenha;
    
  }
  
  //mensagem de login inválido
  loginInvalido(){
    let alert = this.alertCtrl.create({
      title: 'FALHA NO LOGIN',
      subTitle: 'Email ou senha inválido!!!',
      buttons: ['VOLTAR']
    });
    alert.present();
  }
  
  //exibe a mensagem da tela de esqueci a senha
  buscarSenha(){
    let alert = this.alertCtrl.create({
      title: 'Desculpe, a interface de recuperar senha está em construção!!!',
      buttons: [{text:'VOLTAR', cssClass:'ion-button'}]
    });
    alert.present();
  }

  //Navegar para a pagina principal. 
  goToPage(){ 
     this.navCtrl.push(TabsPage);
  }

  logForm(){
        //envia os valores do formulário para o provader      
        this.loginProvader.postLogin(
          this.todo.value
    ).then(
      data=>{
        if(data.data != ""){
          //atribui a variavel validarUser os dados recebidos de data
          this.corteString = (data.data as any);
          this.validarUser = JSON.parse(this.corteString.replace(/[\[\]]+/g, ''));

          //atribui os valores de validarUser a localStorage
          this.loginProvader.setDadosUsusario(this.validarUser.nome);        
          //redirciona para pagina principal
          this.goToPage();
        }else{
          this.loginInvalido();
        }           
      }
    )
  }

}