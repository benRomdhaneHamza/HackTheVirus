import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { MealsProvider } from '../providers/meals/meals';
import { SpacesProvider } from '../providers/spaces/spaces';
import { CommandProvider } from '../providers/command/command';
import { UsersProvider } from '../providers/users/users';
import { AddressesProvider } from '../providers/addresse/addresses';

import { ComponentsModule } from "../components/components.module";
import { AuthService } from '../providers/auth-service/auth-service';

import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Geolocation,
		Diagnostic,
		StatusBar,
		SplashScreen,
		{
			provide: ErrorHandler,
			useClass: IonicErrorHandler
		},
		AuthService,
		MealsProvider,
		SpacesProvider,
		CommandProvider,
		UsersProvider,
		AddressesProvider,
  ]
})
export class AppModule {}
