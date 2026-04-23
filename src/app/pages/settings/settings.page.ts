import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonToggle, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { CommonModule } from '@angular/common';
import { FavouritesService } from '../../services/favourites.service';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonToggle,
    IonButton,
    CommonModule, IonBackButton, IonButtons
  ]
})
export class SettingsPage {

  darkMode = false;

  constructor(
    private storage: Storage,
    private favs: FavouritesService
  ) {}

  async ngOnInit() {
    await this.storage.create();

    const saved = await this.storage.get('darkMode');
    const root = document.documentElement;

    if (saved) {
      this.darkMode = true;
      root.classList.add('dark');
    } else {
      this.darkMode = false;
      root.classList.remove('dark');
    }
  }

  async toggleDarkMode(event: any) {
    this.vibrateHeavy();

    const enabled = event.detail.checked;
    this.darkMode = enabled;
    await this.storage.set('darkMode', enabled);

    const root = document.documentElement;

    if (enabled) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  async clearFavourites() {
    this.vibrateMedium();
    await this.favs.clear();
    alert('Favourites cleared');
  }

  async vibrateMedium() {
    await Haptics.impact({ style: ImpactStyle.Medium });
  }

  async vibrateHeavy() {
    await Haptics.impact({ style: ImpactStyle.Heavy });
  }
}
