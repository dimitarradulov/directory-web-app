import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dictionary-search',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dictionary-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DictionarySearchComponent { }
