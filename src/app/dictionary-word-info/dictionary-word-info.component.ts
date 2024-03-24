import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import { Font } from '../models/font.model';
import { WordTypeComponent } from '../word-type/word-type.component';
import { WordMeaningComponent } from '../word-meaning/word-meaning.component';

@Component({
  selector: 'app-dictionary-word-info',
  standalone: true,
  imports: [CommonModule, WordTypeComponent, WordMeaningComponent],
  templateUrl: './dictionary-word-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DictionaryWordInfoComponent {
  font = input.required<Font>();
  isItalic = computed(() => this.font() === Font.SANS);

  protected readonly Font = Font;
}
