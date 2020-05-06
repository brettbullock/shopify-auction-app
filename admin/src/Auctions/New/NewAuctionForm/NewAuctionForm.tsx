import React, { useState } from 'react';

import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  Form,
  FormLayout,
  Card,
  Stack
} from '@shopify/polaris';

import {
  DateInput,
  PriceInput,
  ProductList,
  ProductPicker
} from './components';

const CreateAuction= loader('../../../graphql/createAuction.graphql');

const NewAuctionForm = () => {
  const [ product, setProduct ] = useState(null as any);
  const [ startingBid, setStartingBid ] = useState("");
  const [ bidIncrements, setBidIncrements ] = useState("");
  const [ startDate, setStartDate ] = useState("");
  const [ endDate, setEndDate ] = useState("");

  const [createAuction, { data }] = useMutation(CreateAuction);

  const handleSubmit = async () => {
    const input = {
      product: product[0],
      startingBid,
      bidIncrements,
      startDate,
      endDate
    };

    console.log(input);
    // await createAuction({ variables: { input }});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <Card>
          <ProductPicker setProduct={setProduct}/>
          <ProductList products={product} />
        </Card>
        <Card>
          <Stack>
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
          </Stack>
        </Card>
        <Card>
          <Stack>
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
          </Stack>
        </Card>
        <Card>
          <Button primary onClick={handleSubmit}>
            Create Auction
          </Button>
        </Card>
      </FormLayout>
    </Form>
  );
};

export default NewAuctionForm;