import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  private readonly localStorageKey = 'theme';
  private currentTheme: WritableSignal<Theme> = signal(Theme.LIGHT);
  theme = computed(() => this.currentTheme());

  constructor() {
    this.setTheme(this.getTheme(), false);
  }

  setTheme(theme: Theme, saveToLocalStorage = true): void {
    this.addThemeClassToDocumentElement(theme);
    this.currentTheme.set(theme);

    if (saveToLocalStorage) {
      localStorage.setItem(this.localStorageKey, theme);
    }
  }

  private getTheme(): Theme {
    if (this.isDarkModePreferred()) {
      return Theme.DARK;
    }

    return Theme.LIGHT;
  }

  private addThemeClassToDocumentElement(theme: Theme): void {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  private isDarkModePreferred(): boolean {
    return (
      localStorage[this.localStorageKey] === 'dark' ||
      (!(this.localStorageKey in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }
}
