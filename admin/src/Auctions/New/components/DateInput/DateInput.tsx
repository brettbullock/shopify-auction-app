import React, { useCallback } from 'react';
import { TextField } from '@shopify/polaris';

interface Props {
  label: string;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

const DateInput = ({ label, selectedDate, setSelectedDate}: Props) => {

  const handleTextFieldChange = useCallback(
    (value) => setSelectedDate(value),
    []
  );

  return (
    <TextField
      label={label}
      value={selectedDate}
      type="date"
      onChange={handleTextFieldChange}
    />
  );
};

export default DateInput;