import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Comic } from 'src/app/services/comic.service';
import { CommonModule } from '@angular/common';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    RouterLink, CommonModule
  ],
})
export class HomePage {
  characters: any[] = [];

  constructor(
    private storage: Storage,
    private comic: Comic,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.comic.getComics().subscribe(data => {
      const shuffled = this.shuffle(data);
      this.characters = shuffled.slice(0, 50);
    });
  }

  openHero(id: number) {
    this.vibrate();
    this.router.navigate(['/hero-detail', id]);
  }

  goToHeroes() {
    this.vibrate();
    this.router.navigate(['/heroes']);
  }

  goToFavourites() {
    this.vibrate();
    this.router.navigate(['/favourites']);
  }

  goToSettings() {
    this.vibrate();
    this.router.navigate(['/settings']);
  }

  shuffle(array: any[]) {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  async vibrate() {
    await Haptics.impact({ style: ImpactStyle.Medium });
  }
}
