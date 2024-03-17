import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FontDropdownComponent } from '../font-dropdown/font-dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontDropdownComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
