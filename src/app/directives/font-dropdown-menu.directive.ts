import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  effect,
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

  constructor() {
    effect(() => {
      if (this.dropdownManager.isShowing()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
