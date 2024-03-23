import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FontService } from './services/font.service';
import { DictionarySearchComponent } from './dictionary-search/dictionary-search.component';
import { DictionaryWordInfoComponent } from './dictionary-word-info/dictionary-word-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    DictionarySearchComponent,
    DictionaryWordInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public fontService = inject(FontService);
}
