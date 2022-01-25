import Attempt from './Attempt';

interface Props {
  history: Array<string>;
  currentAttempt: string;
}
const Grid = ({ history, currentAttempt }: Props) => {
  let rows = [];
  for (let i = 0; i < 6; i++) {
    if (i < history.length) {
      rows.push(<Attempt key={i} attempt={history[i]} solved={true} />);
    } else if (i === history.length) {
      rows.push(<Attempt key={i} attempt={currentAttempt} solved={false} />);
    } else {
      rows.push(<Attempt key={i} attempt="" solved={false} />);
    }
  }
  return <div id="grid">{rows}</div>;
};

export default Grid;
