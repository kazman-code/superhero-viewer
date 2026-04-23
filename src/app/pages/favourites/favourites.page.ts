import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonAvatar, IonLabel, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { FavouritesService } from '../../services/favourites.service';
import { Router } from '@angular/router';
import { Haptics, ImpactStyle } from '@capacitor/haptics';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonList, IonItem, IonAvatar, IonLabel, IonButton, IonButtons, IonBackButton]
})
export class FavouritesPage implements OnInit {

  favouriteHeroes: any[] = [];

  constructor(
    private favs: FavouritesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.favouriteHeroes = this.favs.getAll();
  }

  openHero(id: number) {
  this.vibrate();
  this.router.navigate(['/hero-detail', id]);
}

async clearAll() {
  this.vibrate();
  await this.favs.clear();
  this.favouriteHeroes = [];
}

async vibrate() {
  await Haptics.impact({ style: ImpactStyle.Medium });
}



}
