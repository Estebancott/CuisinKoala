import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

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
            AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"cuisinkoala","appId":"1:1079405041039:web:7b6ccec3a273e831cd27fa","storageBucket":"cuisinkoala.appspot.com","apiKey":"AIzaSyCsuu-bpyw6HMp3wI6rnGiXvE1GCDrDFno","authDomain":"cuisinkoala.firebaseapp.com","messagingSenderId":"1079405041039","measurementId":"G-908P10XBZ4"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), provideAppCheck(() => {
  // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
  const provider = new ReCaptchaEnterpriseProvider('6LfNtDUpAAAAAKWqx78scbM612AP3UAODHwW-k8t');
  return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
}), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), providePerformance(() => getPerformance()), provideStorage(() => getStorage()), provideRemoteConfig(() => getRemoteConfig()), 
            // AngularFireModule.initializeApp(firebaseConfig),
            // AngularFireDatabaseModule,
            // AngularFireAuthModule,
            // AngularFireStorageModule,
          ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}


