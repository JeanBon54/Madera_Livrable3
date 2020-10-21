import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goTo(numMenu) {

    switch (numMenu) {
      case 1:
        this.router.navigate(['/recherche-projet'])
        break;
      case 2:
        this.router.navigate(['/nouveau-projet'])
        break;
      case 3:
        this.router.navigate(['/recherche-devis'])
        break;
      case 4:
        this.router.navigate(['/menu-principal'])
        break;
      case 5:
        this.router.navigate(['/recherche-client'])
        break;
      case 6:
        this.router.navigate(['/nouveau-client'])
        break;
      case 7:
        this.router.navigate(['/parametrage'])
        break;
    }


  }
} 
