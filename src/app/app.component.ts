import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonMenu, IonList } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonMenu, IonList],
})
export class AppComponent {
  constructor(private storage: Storage) {}

  async ngOnInit(){
    await this.storage.create();
  }
}
