import React, { useState } from "react";
import Loader from "components/Loader";
import BeerModalView from "components/BeerModalView";
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
  favList,
  fetchNextBatch,
  isLoadingData,
  isThereMoreData,
  addToFavourites,
  removeFromFavourites,
}) => {
  const [beerModalId, setBeerModalId] = useState("");

  if (list.length === 0 && isLoadingData) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (list.length === 0) {
    return <Container>No beers found.</Container>;
  }
  return (
    <Container>
      {list.map((beer, index) => (
        <>
          {beerModalId === beer.id && (
            <BeerModalView
              beerId={beer.id}
              isFavourite={favList.map((b) => b.id).includes(beer.id)}
              addToFavourites={addToFavourites}
              removeFromFavourites={removeFromFavourites}
              hideModal={() =>
                setBeerModalId((prevState) =>
                  beer.id === prevState ? "" : beer.id
                )
              }
            />
          )}
          <BeerCard
            onClick={() =>
              setBeerModalId((prevState) =>
                beer.id === prevState ? "" : beer.id
              )
            }
            key={beer.id}
          >
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
        </>
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
