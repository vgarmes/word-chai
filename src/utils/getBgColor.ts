import { colors } from '../theme/colors';
import { Secret } from '../types';

export const getBgColor = (attempt: string, i: number, secret: Secret) => {
  let correctLetter = secret ? secret[i] : undefined;
  let attemptLetter = attempt[i];
  if (attemptLetter === undefined || secret.indexOf(attemptLetter) === -1) {
    return colors.absent;
  }
  if (correctLetter === attemptLetter) {
    return colors.correct;
  }
  return colors.present;
};
