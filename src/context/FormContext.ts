import { createContext } from 'react';

export const FormContext = createContext({
  isEditing: false,
  setIsEditing: (isEditing: boolean) => {}
});
