interface Props {
  count: number;
}

const CounterDisplay = ({ count }: Props) => {
  return (
    <div className="text-4xl font-bold text-center">
      {count}
    </div>
  );
};

export default CounterDisplay;
