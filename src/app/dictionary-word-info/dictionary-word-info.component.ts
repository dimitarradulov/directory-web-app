import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Font } from '../models/font.model';

@Component({
  selector: 'app-dictionary-word-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dictionary-word-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DictionaryWordInfoComponent {
  font = input.required<Font>();

  protected readonly Font = Font;
}
