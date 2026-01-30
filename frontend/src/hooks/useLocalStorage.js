import { useState, useEffect } from "react";

/**
 * Custom hook to sync state with localStorage
 * @param {string} key - localStorage key
 * @param {*} initialValue - default value
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [key, value]);

  return [value, setValue];
}
