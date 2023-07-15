import { ChangeEvent, useState } from "react";

export function useInput<T>(initialValue: T) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value as T);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  const rval: [
    {
      value: T;
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    },
    React.Dispatch<React.SetStateAction<T>>,
  ] = [inputProps, setValue];

  return rval;
}
