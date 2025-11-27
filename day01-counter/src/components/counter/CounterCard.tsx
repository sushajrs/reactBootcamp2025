import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CounterDisplay from "@/components/counter/CounterDisplay";
import CounterButtons from "@/components/counter/CounterButtons";
import ResetButton from "@/components/counter/ResetButton";

const CounterCard = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Card className="w-[360px] shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl">React Counter</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-4">
        <CounterDisplay count={count} />

        <CounterButtons
          onIncrease={() => setCount(prev => prev + 1)}
          onDecrease={() => setCount(prev => prev - 1)}
        />

        <ResetButton onReset={() => setCount(0)} />
      </CardContent>
    </Card>
  );
};

export default CounterCard;
