import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
} from '@angular/core';

@Component({
  selector: 'app-word-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordTypeComponent {
  @Input({ required: true }) type: 'noun' | 'verb';
  italic = input<boolean>(true);
}
