import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appFontDropdownMenu]',
  standalone: true,
})
export class FontDropdownMenuDirective {
  private templateRef: TemplateRef<any> = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
}
