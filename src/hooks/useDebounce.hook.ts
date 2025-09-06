import React from 'react';
import UseDebounceCallback from './UseDebounceCallback.hook';

export interface UseDebounceOptions<T> {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
  equalityFn?: (left: T, right: T) => boolean;
}

export default function useDebounce<T>(
  initialValue: T | (() => T),

  delay: number,
  options?: UseDebounceOptions<T>
) {
  const eq = options?.equalityFn ?? ((left: T, right: T) => left === right);
  const unwrappedInitialValue =
    initialValue instanceof Function ? initialValue() : initialValue;
  const [debouncedValue, setDebouncedValue] = React.useState<T>(
    unwrappedInitialValue
  );
  const previousValueRef = React.useRef<T | undefined>(unwrappedInitialValue);

  const updateDebouncedValue = UseDebounceCallback(
    setDebouncedValue,
    delay,
    options
  );

  // Update the debounced value if the initial value changes
  if (!eq(previousValueRef.current as T, unwrappedInitialValue)) {
    updateDebouncedValue(unwrappedInitialValue);
    previousValueRef.current = unwrappedInitialValue;
  }

  return [debouncedValue, updateDebouncedValue];
}
