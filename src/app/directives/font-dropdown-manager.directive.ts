import { Directive, WritableSignal, signal } from '@angular/core';

@Directive({
  selector: '[appFontDropdownManager]',
  standalone: true,
})
export class FontDropdownManagerDirective {
  private isShowingSignal: WritableSignal<boolean> = signal(false);
}
