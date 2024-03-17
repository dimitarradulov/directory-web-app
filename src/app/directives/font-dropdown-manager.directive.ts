import {
  Directive,
  ElementRef,
  HostListener,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appFontDropdownManager]',
  standalone: true,
})
export class FontDropdownManagerDirective {
  private elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  private isShowingSignal: WritableSignal<boolean> = signal(false);
  isShowing = computed(() => this.isShowingSignal());

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: PointerEvent) {
    const nativeElement: any = this.elementRef.nativeElement;
    const clickedInside: boolean = nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isShowingSignal.set(false);
    }
  }
}
