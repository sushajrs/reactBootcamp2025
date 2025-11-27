import { Button } from "@/components/ui/button";

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
}

const CounterButtons = ({ onIncrease, onDecrease }: Props) => {
  return (
    <div className="flex gap-3 justify-center">
      <Button variant="destructive" onClick={onDecrease}>
        - Decrease
      </Button>

      <Button onClick={onIncrease}>
        + Increase
      </Button>
    </div>
  );
};

export default CounterButtons;
