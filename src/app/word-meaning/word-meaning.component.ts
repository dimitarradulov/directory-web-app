import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-word-meaning',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './word-meaning.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordMeaningComponent { }
