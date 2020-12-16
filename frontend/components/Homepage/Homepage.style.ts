import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`
export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
  padding-top: 100px;
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: 96px;
  margin: 0px;
  background: rgba(255, 255, 255, 0.41);
  z-index: 4;
`

export const SearchInput = styled.input`
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  width: 770px;
  height: 70px;
  padding: 10px 20px;
  &::placeholder {
    font-weight: normal;
    font-size: 25px;
    color: #9e9e9e;
  }
  z-index: 3;
`

const PolygonImage = styled.img`
  position: absolute;
`

export const Polygon = styled(PolygonImage)`
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
`

export const ReviewSection = styled.div`
  display: flex;
  padding: 0 70px 70px 30px;
  justify-content: space-between;
  position: relative;
`

export const ReviewsSlider = styled.div`
  display: flex;
  flex-direction: column;
`

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ReviewHeader = styled.div`
  display: flex;
`

export const Avatar = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 50%;
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

export const CustomerName = styled.span`
  font-weight: bold;
  font-size: 16px;
`

export const Rating = styled.div``

export const RatingWrapper = styled.div`
  display: flex;

  ${Rating}:not(:first-child) {
    margin-left: 25px;
  }
`

export const RatingTitle = styled.div`
  font-weight: normal;
  font-size: 12px;
`

export const RatingStar = styled.img`
  width: 20px;
  height: 19px;
`

export const RatingStarsWrapper = styled.div`
  ${RatingStar}:not(:first-child) {
    margin-left: 5px;
  }
`

export const ReviewMessage = styled.div`
  font-weight: 200;
  font-size: 32px;
  max-width: 700px;
  margin-top: 10px;
`

export const ReviewPolygon = styled.img`
  transform: rotate(-12deg);
`

export const ReviewSectionTitle = styled.h2`
  font-weight: 900;
  font-size: 65px;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 45px;
  bottom: 185px;
  transform: rotate(-45deg);
  margin: 0px;
`

export const TitlePart = styled.span`
  color: #000;
`
