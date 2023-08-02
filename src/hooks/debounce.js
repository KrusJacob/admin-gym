import React, { useEffect, useState } from "react";

const useDebounce = (value, delay = 400) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearInterval(handler);
  }, [value, delay]);

  return debounced;
};

export default useDebounce;
