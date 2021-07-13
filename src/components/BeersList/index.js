import React from "react";
import Loader from "components/Loader";
import { PrimaryButton } from "components/Button";
import {
  Container,
  BeerCard,
  BeerNumber,
  Separator,
  BeerDatabox,
} from "./styles";

const BeersList = ({
  list,
  fetchNextBatch,
  isLoadingData,
  isThereMoreData,
}) => {
  if (list.length === 0) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }
  return (
    <Container>
      {list.map((beer, index) => (
        <BeerCard key={beer.id}>
          <BeerNumber>{index + 1}</BeerNumber>
          <Separator />
          <BeerDatabox>
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <strong>{`ABV ${beer.abv || "N/A"}% | IBU ${
              beer.ibu || "N/A"
            }`}</strong>
          </BeerDatabox>
        </BeerCard>
      ))}
      {isLoadingData ? (
        <Loader />
      ) : (
        isThereMoreData && (
          <PrimaryButton onClick={fetchNextBatch}>Show more</PrimaryButton>
        )
      )}
    </Container>
  );
};

export default BeersList;
