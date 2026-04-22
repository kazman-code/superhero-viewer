import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private favs: number[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const stored = await this.storage.get('favourites');
    if (stored) {
      this.favs = stored;
    }
  }

  getAll() {
    return this.favs;
  }

  async add(id: number) {
    this.favs.push(id);
    await this.storage.set('favourites', this.favs);
  }

  async remove(id: number) {
    this.favs = this.favs.filter(x => x !== id);
    await this.storage.set('favourites', this.favs);
  }

  isFavourite(id: number) {
    return this.favs.includes(id);
  }
}
