import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordComponent {
  word = input.required<string>();
}
