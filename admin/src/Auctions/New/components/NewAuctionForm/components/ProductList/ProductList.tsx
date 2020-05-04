import React from 'react'

import {
  Avatar,
  ResourceItem,
  ResourceList,
  TextStyle
}  from '@shopify/polaris';

interface Props {
  products: Array<Object>;
}
const ProductList = ({ products }: Props) => {
  const render = (product: any) => {
    const { id, title, images, productType } = product;
    const url = "www.example.com";
    const image = <Avatar source={images[0].originalSrc}/>;

    return (
      <ResourceItem
        id={id}
        url={url}
        media={image}
      >
        <h3>
          <TextStyle variation="strong">{title}</TextStyle>
        </h3>
        <div>{productType}</div>
      </ResourceItem>
    );
  };

  return (
    <>
      {products
      ? <ResourceList
          resourceName={{singular: 'product', plural: 'products'}}
          items={products}
          renderItem={render}
        /> 
      : null}
    </>
  )
}

export default ProductList;