import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';

import { Font } from '../models/font.model';
import { WordTypeComponent } from '../word-type/word-type.component';
import { WordMeaningComponent } from '../word-meaning/word-meaning.component';
import { WordComponent } from '../word/word.component';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-dictionary-word-info',
  standalone: true,
  imports: [
    CommonModule,
    WordTypeComponent,
    WordMeaningComponent,
    WordComponent,
  ],
  templateUrl: './dictionary-word-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DictionaryWordInfoComponent {
  public dictionaryService = inject(DictionaryService);

  font = input.required<Font>();
  isItalic = computed(() => this.font() === Font.SANS);

  protected readonly Font = Font;

  playSound() {
    const audioUrl = this.dictionaryService.word()?.audio?.fileUrl;

    if (!audioUrl) return;

    const audio = new Audio(audioUrl);

    audio.play();
  }
}
