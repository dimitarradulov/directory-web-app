import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  output,
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
  data = input.required<Word>();
  italic = input<boolean>(true);
  synonymClick = output<string>();
}
