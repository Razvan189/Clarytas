import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string | undefined, initialValue: T) {
  useEffect(() => {
    window.addEventListener(
      "storage",
      () => {
        if (key) {
          const item = window.localStorage.getItem(key);
          if (item) {
            setStoredValue(JSON.parse(item));
          }
        }
      },
      false,
    );
  }, []);

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      let item = null;
      if (key) {
        item = window.localStorage.getItem(key);
      }
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (key) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
