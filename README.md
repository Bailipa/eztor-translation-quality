# EZTor Translation Quality

> Explainable quality scoring for English vocabulary translations.

[English](README.md) · [中文](README.zh-CN.md)

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](./src) [![Tests](https://img.shields.io/badge/tests-Vitest-6e9f18)](./tests) [![License](https://img.shields.io/badge/license-GPL--3.0-green)](./LICENSE)

This small, dependency-free TypeScript module scores vocabulary translations using visible quality factors instead of an opaque model call. It was extracted from the EZTor learning platform so other language-learning tools can reuse the same idea.

## What it checks

- Phonetic transcription and part of speech
- Translation and example completeness
- Multiple parts of speech
- Example and translation length
- Sentence input, non-English headwords, error markers, and sensitive markers

The result includes a score from 0 to 100, a letter grade, and every factor used to reach it.

## Live demo

[Open the interactive demo](https://bailipa.github.io/eztor-translation-quality/) · [Try the examples](examples/)

## Example

```ts
import { calculateQualityScore } from './src/qualityScoring'

const result = calculateQualityScore(
  'resilient', '/rɪˈzɪliənt/', 'adj.', '有韧性的；能复原的',
  'She remained resilient after the setback.', '遭遇挫折后她依然坚韧。'
)

console.log(result.grade, result.score)
```

## Run tests

```bash
npm install
npm test
```

## Design goals

The scorer is deliberately deterministic and inspectable. It is useful for ranking imported vocabulary, selecting better public examples, or giving editors a quick review signal. It is a heuristic, so applications should treat the score as a quality hint rather than a language authority.

## License

GPL-3.0. See [`LICENSE`](LICENSE).
