import { Injectable, WritableSignal, computed, signal } from '@angular/core';

import { Font } from '../models/font.model';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  private currentFont: WritableSignal<Font> = signal(Font.SANS);
  font = computed(() => this.currentFont());

  setFont(font: Font): void {
    this.currentFont.set(font);
  }
}
