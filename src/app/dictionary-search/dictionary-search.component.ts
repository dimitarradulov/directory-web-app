import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-dictionary-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dictionary-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DictionarySearchComponent {
  private dictionaryService = inject(DictionaryService);

  onSubmit(searchTerm: string) {
    this.dictionaryService.setSearchTerm(searchTerm);
  }
}
