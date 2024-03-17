import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';

import { FontService } from '../services/font.service';
import { Font } from '../models/font.model';

const fontsAsString = Object.freeze({
  [Font.SANS]: 'Sans Serif',
  [Font.SERIF]: 'Serif',
  [Font.MONO]: 'Mono',
});

@Component({
  selector: 'app-font-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './font-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FontDropdownComponent {
  private fontService = inject(FontService);
  chosenFont = computed(() => fontsAsString[this.fontService.font()]);
}
