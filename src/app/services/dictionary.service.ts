import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { connect } from 'ngxtension/connect';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, switchMap, map, catchError, startWith } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

import { State } from '../models/state.model';
import { mapResponseToWord } from '../utils/dictionary.util';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private readonly basicUrl =
    'https://api.dictionaryapi.dev/api/v2/entries/en/';
  private http = inject(HttpClient);

  // Sources
  private searchTermSubject = new Subject<string>();
  searchTerm = toSignal(this.searchTermSubject.pipe(startWith('')));

  private nextState$: Observable<State> = this.searchTermSubject.pipe(
    filter((searchTerm) => !!searchTerm),
    switchMap((searchTerm) =>
      this.http.get<any>(`${this.basicUrl}${searchTerm}`),
    ),
    map((response) => ({
      status: 'success' as const,
      data: mapResponseToWord(response),
    })),
    catchError(() => of({ status: 'error' as const, data: null })),
  );

  // State
  private state = signal<State>({
    status: 'idle',
    data: null,
  });

  // Selectors
  word = computed(() => this.state().data);
  status = computed(() => this.state().status);
  wordType = computed(() => Object.keys(this.state().data!.meanings!));

  constructor() {
    // Reducers
    connect(this.state)
      .with(this.nextState$)
      .with(
        this.searchTermSubject.pipe(
          map(() => ({ status: 'loading', data: null })),
        ),
      );
  }

  setSearchTerm(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }
}
