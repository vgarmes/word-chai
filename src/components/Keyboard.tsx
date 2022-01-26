import KeyboardRow from './KeyboardRow';

interface Props {
  bestColors: Map<any, any>;
  onKey: any;
}
const Keyboard = ({ bestColors, onKey }: Props) => {
  return (
    <div id="keyboard">
      <KeyboardRow
        bestColors={bestColors}
        letters="qwertyuiop"
        onKey={onKey}
        isLast={false}
      />
      <KeyboardRow
        bestColors={bestColors}
        letters="asdfghjkl"
        onKey={onKey}
        isLast={false}
      />
      <KeyboardRow
        bestColors={bestColors}
        letters="zxcvbnm"
        onKey={onKey}
        isLast={true}
      />
    </div>
  );
};

export default Keyboard;
