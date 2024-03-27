import { useEffect, useState } from "react";

import { Button } from "@chakra-ui/react";

const Timer = () => {
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(25);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isCounting && timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  const toggleTimer = () => {
    setIsCounting(!isCounting);
  };

  return (
    <div>
      {timeLeft > 0 ? timeLeft : <span>Time's up!!</span>}
      <Button colorScheme="blue" onClick={toggleTimer}>
        {!isCounting ? <span>Start</span> : <span>Pause</span>}
      </Button>
    </div>
  );
};

export default Timer;
