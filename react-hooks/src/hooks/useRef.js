import { useState, useEffect } from 'react';

export function useRef(initialValue) {
  const [ref] = useState(() => ({
    current: initialValue,
  }));

  useEffect(() => {
    ref.current = initialValue;
  }, [initialValue]);

  return ref;
}