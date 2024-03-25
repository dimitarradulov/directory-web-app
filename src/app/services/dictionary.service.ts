import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private readonly basicUrl =
    'https://api.dictionaryapi.dev/api/v2/entries/en/';
}
