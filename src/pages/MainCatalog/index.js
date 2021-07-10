import React, { useState, useEffect } from "react";
import TitleHeader from "components/TitleHeader";
import BeersList from "components/BeersList";
import { Container } from "./styles";

const batchLength = 25;

const MainCatalog = () => {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isThereMoreData, setIsThereMoreData] = useState(true);
  const [beersList, setBeersList] = useState([]);
  const [beersListOffset, setBeersListOffset] = useState(1);

  useEffect(() => {
    setIsLoadingData(true);
    fetch(`/beers?page=${beersListOffset}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length < batchLength) {
          setIsThereMoreData(false);
        }

        setBeersList((currentList) => [...currentList, ...data]);
      });

    setIsLoadingData(false);
  }, [beersListOffset]);

  return (
    <Container>
      <TitleHeader title="Krafthaven" subtitle="Royal Brewery" />
      <BeersList
        list={beersList}
        fetchNextBatch={() =>
          setBeersListOffset((prevOffset) => prevOffset + 1)
        }
        isThereMoreData={isThereMoreData}
        isLoadingData={isLoadingData}
      />
    </Container>
  );
};

export default MainCatalog;
