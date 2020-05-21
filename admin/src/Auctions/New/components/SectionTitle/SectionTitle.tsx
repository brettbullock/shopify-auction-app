import React from 'react';

import {
  Caption,
  Heading
} from '@shopify/polaris';

interface Props {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Caption>{subtitle}</Caption>
    </>
  );
};

export default SectionTitle;