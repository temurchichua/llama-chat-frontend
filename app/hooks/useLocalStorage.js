import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

const useLocalStorage = (key, initialValue) => {
  let storedValue;
  if (isBrowser) {
    const item = localStorage.getItem(key);
    try {
      storedValue = item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error parsing the value from localStorage", error);
      storedValue = initialValue;
    }
  } else {
    storedValue = initialValue;
  }
  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    if (isBrowser) {
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
