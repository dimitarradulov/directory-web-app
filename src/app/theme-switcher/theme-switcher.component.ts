import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ThemeSwitcherDirective } from '../directives/theme-switcher.directive';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, ThemeSwitcherDirective],
  templateUrl: './theme-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {}
