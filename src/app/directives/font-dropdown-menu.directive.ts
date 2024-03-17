import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { FontDropdownManagerDirective } from './font-dropdown-manager.directive';

@Directive({
  selector: '[appFontDropdownMenu]',
  standalone: true,
})
export class FontDropdownMenuDirective {
  private templateRef: TemplateRef<any> = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  private dropdownManager = inject(FontDropdownManagerDirective);
}
