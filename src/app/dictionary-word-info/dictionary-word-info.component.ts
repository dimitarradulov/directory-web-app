import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dictionary-word-info',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dictionary-word-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DictionaryWordInfoComponent { }
