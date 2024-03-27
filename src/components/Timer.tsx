import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(25);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return <div>{timeLeft > 0 ? timeLeft : <span>Time's up!!</span>}</div>;
};

export default Timer;
