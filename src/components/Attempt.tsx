import Cell from './Cell';

interface Props {
  attempt: string;
  solved: boolean;
}
const Attempt = ({ attempt, solved }: Props) => {
  let cells = [];
  for (let i = 0; i < 5; i++) {
    cells.push(<Cell key={i} index={i} attempt={attempt} solved={solved} />);
  }
  return <div>{cells}</div>;
};

export default Attempt;
