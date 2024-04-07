import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Word } from '../models/word.model';

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordComponent {
  word = input.required<Word>();
  playSoundClick = output<void>();
}
