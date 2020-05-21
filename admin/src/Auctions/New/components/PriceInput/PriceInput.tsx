import React, { useCallback } from 'react';

import { TextField } from '@shopify/polaris';

interface Props {
  label: string;
  selectedPrice: string;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string>>;
}

const PriceInput = ({ label, selectedPrice, setSelectedPrice }: Props) => {
  const handleTextFieldChange = useCallback(
    (value) => setSelectedPrice(value),
    [],
  );

  return (
    <TextField
      label={label}
      type="text"
      value={selectedPrice}
      onChange={handleTextFieldChange}
      prefix="$"
  />
  );
};

export default PriceInput;