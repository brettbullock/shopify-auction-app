import React, { useState } from 'react';

import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  Card,
  Form,
  FormLayout,
  Heading
} from '@shopify/polaris';

import {
  DateInput,
  PriceInput,
  ProductList,
  ProductPicker,
  SectionTitle
} from './components';

import {
  AuctionCreateInput
} from '../../../types/globalTypes';
import { ProductVariant } from '@shopify/app-bridge/actions/ResourcePicker';

interface Input {
  input: AuctionCreateInput;
}

const CreateAuction = loader('../../graphql/createAuction.graphql');

const New = () => {
  const [ product, setProduct ] = useState(null as any);
  const [ startingBid, setStartingBid ] = useState("");
  const [ bidIncrements, setBidIncrements ] = useState("");
  const [ startDate, setStartDate ] = useState("");
  const [ endDate, setEndDate ] = useState("");

  const [createAuction, { data }] = useMutation(CreateAuction);

  const handleSubmit = async () => {
    product[0].variants.forEach((variant: any) => {
      delete variant.inventoryItem.__typename;
      delete variant.product.__typename;
      variant.selectedOptions.forEach((option: any) => {
        delete option.__typename;
      });
    });

    const input: Input = {
      input: {
        product: product[0],
        startingBid,
        bidIncrements,
        startDate,
        endDate
      }
    };

    console.log(input);
    await createAuction({ variables: input });
  };

  return (
    <Card title="New Auction Form" sectioned>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <SectionTitle
            title="Step 1: Select Product"
            subtitle="Select the product you want to auction."
          />
          <ProductList products={product} />
          <ProductPicker setProduct={setProduct}/>
          <SectionTitle
            title="Step 2: Bid Details"
            subtitle="Set the starting bid and bid increments."
          />
          <FormLayout.Group>
            <PriceInput
              label="Starting Bid"
              selectedPrice={startingBid}
              setSelectedPrice={setStartingBid}
              />
            <PriceInput
              label="Bid Increments"
              selectedPrice={bidIncrements}
              setSelectedPrice={setBidIncrements}
              />
          </FormLayout.Group>
          <SectionTitle
            title="Step 3: Scheduling"
            subtitle="Set the start and end dates."
          />
          <FormLayout.Group>
            <DateInput
              label="Start Date"
              selectedDate={startDate}
              setSelectedDate={setStartDate}
              />
            <DateInput
              label="End Date"
              selectedDate={endDate}
              setSelectedDate={setEndDate}
              />
          </FormLayout.Group>
          <SectionTitle
            title="Step 4: Save"
            subtitle="The auction will be saved. By default, auctions are not published."
          />
          <Button primary onClick={handleSubmit}>
            Create Auction
          </Button>
        </FormLayout>
      </Form>
    </Card>
  );
};

export default New;