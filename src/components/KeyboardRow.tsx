import Button from './Button';

interface Props {
  bestColors: Map<any, any>;
  letters: any;
  isLast: any;
  onKey: (buttonKey: string) => void;
}
const KeyboardRow = ({ bestColors, letters, isLast, onKey }: Props) => {
  let buttons = [];
  if (isLast) {
    buttons.push(
      <Button onKey={onKey} key="enter" buttonKey="Enter">
        Enter
      </Button>
    );
  }
  for (let letter of letters) {
    buttons.push(
      <Button
        onKey={onKey}
        color={bestColors.get(letter)}
        key={letter}
        buttonKey={letter}
      >
        {letter}
      </Button>
    );
  }
  if (isLast) {
    buttons.push(
      <Button onKey={onKey} key="backspace" buttonKey="Backspace">
        Backspace
      </Button>
    );
  }
  return <div>{buttons}</div>;
};

export default KeyboardRow;
