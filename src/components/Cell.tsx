import { colors } from '../theme/colors';
import { getBgColor } from '../utils/getBgColor';

interface Props {
  index: number;
  attempt: string;
  solved: boolean;
}
const Cell = ({ index, attempt, solved }: Props) => {
  let content: string;
  let hasLetter = attempt[index] !== undefined;
  let color = getBgColor(attempt, index);
  if (hasLetter) {
    content = attempt[index];
  }
  return (
    <div
      className={`cell ${solved ? 'solved' : ''} ${hasLetter ? ' filled' : ''}`}
    >
      <div className="surface" style={{ transitionDelay: index * 300 + 'ms' }}>
        <div
          className="front"
          style={{
            backgroundColor: colors.black,
            borderColor: hasLetter ? colors.middlegrey : '',
          }}
        >
          {content}
        </div>
        <div
          className="back"
          style={{ backgroundColor: color, borderColor: color }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Cell;
