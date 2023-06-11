import { useState } from 'react';

import { IField, IFormData } from '../log-in.types';

type UpdateFormData = (fieldName: keyof IFormData, value: IField) => void;

const useFormState = (): {
  formData: IFormData;
  updateFormData: UpdateFormData;
} => {
  const [formData, setFormData] = useState<IFormData>({
    userName: {
      value: '',
      isTouched: false,
    },
    password: {
      value: '',
      isTouched: false,
    },
  });

  const updateFormData: UpdateFormData = (fieldName, value) => {
    if (fieldName === undefined || value === undefined) return;
    if (formData[fieldName] === undefined) return;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  return { formData, updateFormData };
};

export default useFormState;
