import { Injectable, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private readonly basicUrl =
    'https://api.dictionaryapi.dev/api/v2/entries/en/';

  private wordSignal: WritableSignal<string> = signal<string>('');
  word = computed(() => this.wordSignal());

  setWord(word: string) {
    this.wordSignal.set(word);
  }
}
