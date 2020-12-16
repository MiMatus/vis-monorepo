import React from "react"
import {
  Avatar,
  CustomerName,
  DetailsWrapper,
  FirstSection,
  Polygon,
  Rating,
  RatingStar,
  RatingStarsWrapper,
  RatingTitle,
  RatingWrapper,
  ReviewHeader,
  ReviewMessage,
  ReviewPolygon,
  ReviewSection,
  ReviewSectionTitle,
  ReviewsSlider,
  ReviewWrapper,
  SearchInput,
  Title,
  TitlePart,
  Wrapper,
} from "./Homepage.style"

export const Homepage: React.FC = ({}) => {
  return (
    <Wrapper>
      <FirstSection>
        <Title>Kohokoľvek na čokoľvek</Title>
        <SearchInput
          type="text"
          placeholder="Nájdite odborníka, ktorého potrebujete"
        ></SearchInput>
        <Polygon src="/images/polygon-background.svg"></Polygon>
      </FirstSection>
      <ReviewSection>
        <ReviewsSlider>
          <ReviewWrapper>
            <ReviewHeader>
              <Avatar src="/images/user-image-sample.png" />
              <DetailsWrapper>
                <CustomerName>Natália H.</CustomerName>
                <RatingWrapper>
                  <Rating>
                    <RatingTitle>Práca</RatingTitle>
                    <RatingStarsWrapper>
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                    </RatingStarsWrapper>
                  </Rating>
                  <Rating>
                    <RatingTitle>Cena</RatingTitle>
                    <RatingStarsWrapper>
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                    </RatingStarsWrapper>
                  </Rating>
                  <Rating>
                    <RatingTitle>Komunikácia</RatingTitle>
                    <RatingStarsWrapper>
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                      <RatingStar src="/images/star-icon.svg" />
                    </RatingStarsWrapper>
                  </Rating>
                </RatingWrapper>
              </DetailsWrapper>
            </ReviewHeader>
            <ReviewMessage>
              Kvalitne odvedena praca, vsetko namontovane tak, aby to vydrzalo
              naveky. odporucam vsetkymi desiatimi....
            </ReviewMessage>
          </ReviewWrapper>
        </ReviewsSlider>
        <ReviewPolygon src="/images/polygon-review.svg" />
        <ReviewSectionTitle>
          Dôvera na 1. <TitlePart>mieste</TitlePart>
        </ReviewSectionTitle>
      </ReviewSection>
    </Wrapper>
  )
}
