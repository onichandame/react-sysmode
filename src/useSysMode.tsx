import { useReducer, useEffect } from 'react';
import { object, boolean, InferType } from 'yup';

const SysModeSchema = object().shape({
  dark: boolean()
    .required()
    .default(false),
});

type SysMode = InferType<typeof SysModeSchema>;

export const useSysMode = (): SysMode => {
  const [dark, updateDark] = useReducer(
    () =>
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches,
    false
  );
  useEffect(() => {
    updateDark();
    window.matchMedia('(prefers-color-scheme: dark)').addListener(updateDark);
  }, []);
  return { dark };
};
