import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dictionary-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dictionary-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DictionarySearchComponent {}
