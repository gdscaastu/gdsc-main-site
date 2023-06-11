import { useEffect, useState } from "react";

const ISSERVER = typeof window === "undefined";

function getSavedValue(key, initialValue) {
  if (!ISSERVER) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  }
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  const logout = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, logout];
}
