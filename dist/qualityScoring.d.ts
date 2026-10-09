export interface QualityFactors {
    hasPhonetic: boolean;
    hasPos: boolean;
    hasExample: boolean;
    hasExampleTranslation: boolean;
    translationLength: number;
    exampleLength: number;
    hasMultiplePos: boolean;
    isError: boolean;
    isSensitive: boolean;
    isNonEnglish: boolean;
    isSentence: boolean;
}
export interface QualityScore {
    score: number;
    factors: QualityFactors;
    grade: 'A' | 'B' | 'C' | 'D';
}
export declare function calculateQualityScore(word: string, phonetic: string | null, pos: string | null, translation: string, example: string | null, exampleTranslation: string | null): QualityScore;
export declare function updatePublicWordQuality(currentScore: number, newScore: number, currentVersion: number): {
    qualityScore: number;
    version: number;
};
export declare function shouldUpdatePublicWord(currentWord: {
    qualityScore: number;
    version: number;
} | null, newScore: number): boolean;
