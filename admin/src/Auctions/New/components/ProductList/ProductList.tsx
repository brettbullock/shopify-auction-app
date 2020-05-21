import React from 'react';

import {
  Avatar,
  ResourceItem,
  ResourceList,
  TextStyle
}  from '@shopify/polaris';

interface Props {
  products: object[];
}
const ProductList = ({ products }: Props) => {
  const render = (product: any) => {
    const { id, title, images, vendor, productType } = product;
    const url = "products" + id.split("Product")[1];
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
        <div>{vendor}</div>
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
  );
};

export default ProductList;