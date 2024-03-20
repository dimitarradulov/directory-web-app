import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  private currentTheme: WritableSignal<Theme> = signal(Theme.LIGHT);
  theme = computed(() => this.currentTheme());
}
