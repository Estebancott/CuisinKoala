import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyD7x7EFRqyZ-yDeBgLt--a40Art4MzzLf0",
  authDomain: "cuisin-koala.firebaseapp.com",
  databaseURL: "https://cuisin'koala.firebaseio.com",
  projectId: "cuisin-koala",
  storageBucket: "cuisin-koala.appspot.com",
  messagingSenderId: "43820494066",
  appId: "1:43820494066:web:1f417eadf729f58b5c746b",
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
          HttpClientModule,
            IonicModule.forRoot(), 
            AppRoutingModule, 
            // AngularFireModule.initializeApp(firebaseConfig),
            // AngularFireDatabaseModule,
            // AngularFireAuthModule,
            // AngularFireStorageModule,
          ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


