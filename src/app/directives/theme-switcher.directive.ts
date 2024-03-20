import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';

import { ThemeSwitcherService } from '../services/theme-switcher.service';
import { Theme } from '../models/theme.model';

@Directive({
  selector: '[appThemeSwitcher]',
  standalone: true,
})
export class ThemeSwitcherDirective implements AfterViewInit {
  private themeSwitcherService = inject(ThemeSwitcherService);
  private elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);

  ngAfterViewInit(): void {
    const theme = this.themeSwitcherService.theme();

    this.elementRef.nativeElement.checked = theme === Theme.DARK;
  }

  @HostListener('change', ['$event'])
  onSwitchTheme(event: Event): void {
    const themeSwitchEl = event.target as HTMLInputElement;

    if (themeSwitchEl.checked) {
      this.themeSwitcherService.setTheme(Theme.DARK);
    } else {
      this.themeSwitcherService.setTheme(Theme.LIGHT);
    }
  }
}
