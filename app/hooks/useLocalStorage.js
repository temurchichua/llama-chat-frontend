import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  let storedValue;

  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    try {
      storedValue = item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error parsing the value from localStorage", error);
      storedValue = initialValue;
    }
  } else {
    // Handle server-side rendering or other scenarios here if needed.
    storedValue = initialValue;
  }

  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Could not save the value to local storage", error);
      }
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;