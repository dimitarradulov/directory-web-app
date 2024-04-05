import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
} from '@angular/core';

import { Word } from '../models/word.model';

@Component({
  selector: 'app-word-meaning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-meaning.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordMeaningComponent {
  wordType = input.required<'noun' | 'verb'>();
  italic = input<boolean>(true);
  data = input.required<Word>();
}
