import { Injectable, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private readonly basicUrl =
    'https://api.dictionaryapi.dev/api/v2/entries/en/';

  private chosenWordSignal: WritableSignal<string> = signal<string>('');
  chosenWord = computed(() => this.chosenWordSignal());

  setChosenWord(word: string) {
    this.chosenWordSignal.set(word);
  }
}
