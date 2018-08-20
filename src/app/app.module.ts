import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { NotasPageModule } from '../pages/notas/notas.module';
import { ProvasPageModule } from '../pages/provas/provas.module';
import { MaisPageModule } from '../pages/mais/mais.module';
import { LoginProvider } from '../providers/login/login';
import { HTTP } from '@ionic-native/http';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement:"top"}),
    LoginPageModule,
    NotasPageModule,
    ProvasPageModule,
    MaisPageModule    
  ],  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    HTTP,
    NativeStorage
  ]
})
export class AppModule {}
