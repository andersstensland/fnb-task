import { useState, useEffect } from "react";

function useSyncedState(key, initialState) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      try {
        // Attempt to parse the stored value as JSON
        return storedValue ? JSON.parse(storedValue) : initialState;
      } catch (error) {
        // If parsing fails, clear the invalid entry & return the initial state
        localStorage.removeItem(key);
        return initialState;
      }
    }
    return initialState;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Store the value as a JSON string
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

export default useSyncedState;
