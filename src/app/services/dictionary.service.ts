import { Injectable, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private readonly basicUrl =
    'https://api.dictionaryapi.dev/api/v2/entries/en/';

  private searchTermSignal: WritableSignal<string> = signal<string>('');
  searchTerm = computed(() => this.searchTermSignal());

  setSearchTerm(searchTerm: string) {
    this.searchTermSignal.set(searchTerm);
  }
}
