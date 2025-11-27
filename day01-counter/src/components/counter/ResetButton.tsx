import { Button } from "@/components/ui/button";

const ResetButton = ({ onReset }: { onReset: () => void }) => {
  return (
    <Button variant="outline" className="mt-3" onClick={onReset}>
      Reset
    </Button>
  );
};

export default ResetButton;
