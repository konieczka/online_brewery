import React, { useEffect, useState } from "react";
import { PrimaryButton, SecondaryButton } from "components/Button";
import getShortForUnit from "utils/getShortForUnit";
import {
  BeerModalContainer,
  BeerModalBody,
  HeaderSection,
  SectionLabel,
  SectionList,
  SectionSingleParagraph,
  SvgIcon,
  ButtonsGroup,
} from "./styles";

const BeerModalView = ({
  beerId,
  hideModal,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
}) => {
  const [beerData, setBeerData] = useState(null);

  useEffect(() => {
    fetch(`/beers/${beerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBeerData(data[0]);
      });
  }, [beerId]);

  if (!beerData) {
    return null;
  }

  return (
    <BeerModalContainer>
      <HeaderSection>
        <h1>{beerData.name}</h1>
        <h2>{beerData.tagline}</h2>
      </HeaderSection>
      <BeerModalBody>
        <SectionLabel>
          <SvgIcon src="/hourglass.svg" /> First brewed&nbsp;
          {beerData.first_brewed}
        </SectionLabel>
        <SectionLabel>
          <SvgIcon src="/ancient-scroll.svg" /> Trivia
        </SectionLabel>
        <SectionSingleParagraph>{beerData.description}</SectionSingleParagraph>
        <SectionLabel>
          <SvgIcon src="/wheat.svg" /> Malt
        </SectionLabel>
        <SectionList>
          {beerData.ingredients.malt.map((m) => (
            <li key={m.name}>
              <strong>
                {m.name} {m.amount.value}&nbsp;
                {getShortForUnit(m.amount.unit)}
              </strong>
            </li>
          ))}
        </SectionList>
        <SectionLabel>
          <SvgIcon src="/hop.svg" /> Hop
        </SectionLabel>
        <SectionList>
          {beerData.ingredients.hops.map((h) => (
            <li key={h.name}>
              <strong>
                {h.name} {h.amount.value}&nbsp;
                {getShortForUnit(h.amount.unit)}
              </strong>
              <small>
                &nbsp;??? {h.attribute} ??? Added at {h.add}
              </small>
            </li>
          ))}
        </SectionList>
        <SectionLabel>
          <SvgIcon src="/yeast.svg" /> Yeast
        </SectionLabel>
        <SectionSingleParagraph>
          {beerData.ingredients.yeast}
        </SectionSingleParagraph>
        <SectionLabel>
          <SvgIcon src="/hamburger.svg" /> Recommended snacks
        </SectionLabel>
        <SectionList>
          {beerData.food_pairing.map((food) => (
            <li key={food}>
              <strong>{food}</strong>
            </li>
          ))}
        </SectionList>
      </BeerModalBody>
      <ButtonsGroup>
        <SecondaryButton onClick={hideModal}>Cancel</SecondaryButton>
        <PrimaryButton
          onClick={() => {
            if (!isFavourite) {
              addToFavourites(beerData);
            } else {
              removeFromFavourites(beerData);
            }

            hideModal();
          }}
        >
          {isFavourite ? "Remove from fav" : "Add to fav"}
        </PrimaryButton>
      </ButtonsGroup>
    </BeerModalContainer>
  );
};

export default BeerModalView;
