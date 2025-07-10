export interface Emotion {
  emotion: string;
  percent: number;
  words: string[];
}
export interface ResultData {
  emotions: Emotion[];
  confidence: number;
  accuracy: number;
}