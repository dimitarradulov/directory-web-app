import { Directive, HostListener, inject } from '@angular/core';
import { FontDropdownManagerDirective } from './font-dropdown-manager.directive';

@Directive({
  selector: '[appFontDropdownTrigger]',
  standalone: true,
})
export class FontDropdownTriggerDirective {
  private dropdownManager = inject(FontDropdownManagerDirective);
}
