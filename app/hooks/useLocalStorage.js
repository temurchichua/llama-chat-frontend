import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const item = localStorage.getItem(key);
  let storedValue;
  try {
    storedValue = item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error("Error parsing the value from localStorage", error);
    storedValue = initialValue;
  }
  const [value, setValue] = useState(storedValue);
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Could not save the value to local storage", error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
