import React, { useState } from 'react';

import {
  Button
} from '@shopify/polaris';

import {
  ResourcePicker
} from '@shopify/app-bridge-react';

import {
  SelectPayload
} from '@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker';

import { ResourceSelection } from '@shopify/app-bridge/actions/ResourcePicker';

interface Props {
  setProduct: React.Dispatch<React.SetStateAction<ResourceSelection[]>>;
}

const ProductPicker = ({ setProduct }: Props) => {
  const [ isPickerOpen, setIsPickerOpen ] = useState(false);

  const handleSelection = (resources: SelectPayload) => {
    setIsPickerOpen(false);
    setProduct(resources.selection);
    console.log(resources.selection);
  };

  const handleClick = () => {
    setIsPickerOpen(true);
  };

  return (
    <>
      <Button onClick={handleClick}>
        Select Products
      </Button>
      <ResourcePicker
        open={isPickerOpen}
        resourceType="Product"
        allowMultiple={false}
        showVariants={false}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => setIsPickerOpen(false)}
      />
    </>
  );
};

export default ProductPicker;