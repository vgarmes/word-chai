import { colors } from '../theme/colors';
import { History } from '../types';
import { getBgColor } from './getBgColor';

function getBetterColor(a: string, b: string) {
  if (a === colors.green || b === colors.green) {
    return colors.green;
  }
  if (a === colors.yellow || b === colors.yellow) {
    return colors.yellow;
  }
  return colors.grey;
}

export function calculateBestColors(history: History, secret: string) {
  let map = new Map();
  for (let attempt of history) {
    for (let i = 0; i < attempt.length; i++) {
      let color = getBgColor(attempt, i, secret);
      let key = attempt[i];
      let bestColor = map.get(key);
      map.set(key, getBetterColor(color, bestColor));
    }
  }
  return map;
}
