export type Definition = {
  definition: string;
  example: string;
};

export type PartOfSpeech = {
  definitions: Definition[];
  synonyms: string[];
};

export type Meanings = {
  noun: PartOfSpeech;
  verb: PartOfSpeech;
};

export type Audio = {
  text: string;
  fileUrl: string;
};

export type Word = {
  word: string;
  meanings: Meanings;
  audio: Audio;
  sourceUrl: string;
};
