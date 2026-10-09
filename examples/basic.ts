import { calculateQualityScore } from '../src/qualityScoring.js'

const result = calculateQualityScore(
  'resilient', '/rɪˈzɪliənt/', 'adj.', '有韧性的；能复原的',
  'She remained resilient after the setback.', '遭遇挫折后她依然坚韧。',
)
console.log(result)
