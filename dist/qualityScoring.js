import { isSentence } from './sentenceDetector.js';
export function calculateQualityScore(word, phonetic, pos, translation, example, exampleTranslation) {
    const factors = {
        hasPhonetic: !!phonetic && phonetic.trim().length > 0,
        hasPos: !!pos && pos.trim().length > 0,
        hasExample: !!example && example.trim().length > 0,
        hasExampleTranslation: !!exampleTranslation && exampleTranslation.trim().length > 0,
        translationLength: translation?.trim().length || 0,
        exampleLength: example?.trim().length || 0,
        hasMultiplePos: pos ? pos.includes('/') || pos.includes(';') : false,
        isError: pos === '错误' || translation.includes('拼写错误'),
        isSensitive: translation.includes('粗俗') || translation.includes('敏感'),
        isNonEnglish: /[^\x00-\x7F]/.test(word),
        isSentence: isSentence(word),
    };
    let score = 0;
    if (factors.isError || factors.isSensitive || factors.isNonEnglish || factors.isSentence) {
        return { score: 0, factors, grade: 'D' };
    }
    if (factors.hasPhonetic)
        score += 15;
    if (factors.hasPos)
        score += 15;
    if (factors.hasExample)
        score += 20;
    if (factors.hasExampleTranslation)
        score += 10;
    if (factors.translationLength > 10)
        score += 10;
    if (factors.translationLength > 30)
        score += 5;
    if (factors.hasMultiplePos)
        score += 10;
    if (factors.exampleLength > 20)
        score += 10;
    if (factors.exampleLength > 50)
        score += 5;
    const grade = score >= 80 ? 'A' : score >= 60 ? 'B' : score >= 40 ? 'C' : 'D';
    return { score: Math.min(score, 100), factors, grade };
}
export function updatePublicWordQuality(currentScore, newScore, currentVersion) {
    if (newScore > currentScore) {
        return {
            qualityScore: newScore,
            version: currentVersion + 1,
        };
    }
    return {
        qualityScore: currentScore,
        version: currentVersion,
    };
}
export function shouldUpdatePublicWord(currentWord, newScore) {
    if (!currentWord)
        return true;
    if (newScore > currentWord.qualityScore)
        return true;
    if (newScore === currentWord.qualityScore && Math.random() > 0.5)
        return true;
    return false;
}
