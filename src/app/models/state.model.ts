import { Word } from './word.model';

export type Status = 'idle' | 'loading' | 'success' | 'error';

export type State = {
  status: Status;
  data: Word | null;
};
