import { colors } from '../theme/colors';

export const getBgColor = (attempt: string, i: number, secret: string) => {
  let correctLetter = secret[i];
  let attemptLetter = attempt[i];
  if (attemptLetter === undefined || secret.indexOf(attemptLetter) === -1) {
    return colors.absent;
  }
  if (correctLetter === attemptLetter) {
    return colors.correct;
  }
  return colors.present;
};
