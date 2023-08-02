import React, { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const update = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(update);
  }, []);
  return <span className="text-2xl text-white">{date.toLocaleTimeString().slice(0, -3)}</span>;
}
export default Clock;
