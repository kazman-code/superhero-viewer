import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonCard, IonItem, IonAvatar, IonLabel, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Haptics, ImpactStyle } from '@capacitor/haptics';


import { Comic } from '../../services/comic.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, RouterLink, FormsModule, IonSearchbar, IonCard, IonItem, IonAvatar, IonLabel, IonButtons, IonBackButton ]
})
export class HeroesPage implements OnInit {
  comics: any[] = [];
  loading = true;
  allComics: any[] = [];
  filteredComics: any[] = [];
  searchTerm = '';

  constructor(private comic: Comic, private router: Router) {}

  ngOnInit() {
    this.comic.getComics().subscribe(data => {
      this.allComics = data;
      this.filteredComics = data;
      this.loading = false;
    });
  }

  filterComics() {
  const term = this.searchTerm.toLowerCase();

  this.filteredComics = this.allComics.filter(comic =>
    comic.name.toLowerCase().includes(term)
  );
}


openDetail(id: number) {
  this.vibrate();
  this.router.navigate(['/hero-detail', id]);
}

async vibrate() {
  await Haptics.impact({ style: ImpactStyle.Medium });
}


}
