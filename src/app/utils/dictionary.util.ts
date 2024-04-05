import { Meanings, Word, Audio } from '../models/word.model';

export function mapResponseToWord(response: any[]): Word {
  const data = response[0];
  const meanings: Meanings = data.meanings.reduce((acc: any, meaning: any) => {
    if (meaning.partOfSpeech === 'noun' || meaning.partOfSpeech === 'verb') {
      acc[meaning.partOfSpeech] = {
        definitions: meaning.definitions.map(
          ({ definition, example }: any) => ({ definition, example }),
        ),
        synonyms: meaning.synonyms,
      };
    }

    return acc;
  }, {} as Meanings);
  const audio: Audio = data.phonetics.reduce((acc: any, phonetic: any) => {
    if (isEmpty(acc)) {
      acc.text = phonetic.text;
      acc.fileUrl = phonetic.audio;
    }

    return acc;
  }, {} as Audio);
  const sourceUrl = data.sourceUrls[0];

  return {
    word: data.word,
    meanings,
    audio,
    sourceUrl,
  };
}

const isEmpty = (obj: Record<any, any>) =>
  !Object.entries(obj || {}).length && !obj?.['length'] && !obj?.['size'];
