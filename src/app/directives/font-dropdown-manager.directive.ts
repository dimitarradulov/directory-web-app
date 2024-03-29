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
  exportAs: 'appFontDropdownManager',
})
export class FontDropdownManagerDirective {
  private elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  private isShowingSignal: WritableSignal<boolean> = signal(false);
  isShowing = computed(() => this.isShowingSignal());

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: PointerEvent) {
    const nativeElement: any = this.elementRef.nativeElement;
    const clickedOutside: boolean = !nativeElement.contains(event.target);
    if (clickedOutside) {
      this.isShowingSignal.set(false);
    }
  }

  toggleDropdown(): void {
    this.isShowingSignal.update((isShowing) => !isShowing);
  }

  hideDropdown(): void {
    this.isShowingSignal.set(false);
  }
}
