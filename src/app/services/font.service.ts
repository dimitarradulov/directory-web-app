import { Injectable, WritableSignal, computed, signal } from '@angular/core';

import { Font } from '../models/font.model';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  private currentFont: WritableSignal<Font> = signal(Font.SANS);
  font = computed(() => this.currentFont());

  constructor() {
    this.currentFont.set(this.getFont());
  }

  setFont(font: Font): void {
    this.currentFont.set(font);
    this.saveFontToLocalStorage();
  }

  private getFont(): Font {
    const font = localStorage.getItem('font');

    if (font) {
      return font as Font;
    }

    return Font.SANS;
  }

  private saveFontToLocalStorage() {
    localStorage.setItem('font', this.currentFont());
  }
}
