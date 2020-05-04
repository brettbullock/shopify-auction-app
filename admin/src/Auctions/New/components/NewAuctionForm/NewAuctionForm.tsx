import React, { useState } from 'react';

import { 
  Form, 
  FormLayout, 
  ResourceList
} from '@shopify/polaris';

import ProductPicker from './components/ProductPicker';
import ProductList from './components/ProductList';

const NewAuctionForm = () => {
  const [ selectedProduct, setSelectedProduct ] = useState(null as any);
  
  const handleSubmit = () => {
    console.log('hello!');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <ProductPicker setProduct={setSelectedProduct}/>
        <ProductList products={selectedProduct} />
      </FormLayout>
    </Form>
  )
}

export default NewAuctionForm;