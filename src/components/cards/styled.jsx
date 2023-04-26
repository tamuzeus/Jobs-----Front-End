import styled from "styled-components";

export const CardsZone = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoJobsMessage = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 12px;
  font-style: italic;
  margin-top: 50px;
`

export const TitleZone = styled.h2`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #373f41;
  height: 70px;
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    bottom: 55px;
    left: 0;
    width: 40px;
    height: 5px;
    background-color: #ffd700;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const CardBody = styled.div`
  background-color: #ffffff;
  height: 230px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 40px;
  cursor: pointer;

  &:nth-child(3n) {
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 12px;
`;

export const TitleText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #666666;
  margin-bottom: 20px;
`;

export const DescriptionText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const CompanyName = styled.div`
  font-size: 14px;
  color: #999999;
  margin-bottom: 6px;
`;

export const CompanyNameText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CityName = styled.div`
  font-size: 12px;
  color: #999999;
`;

export const CityNameText = styled.div``;

export const StateName = styled.div`
  font-size: 12px;
  color: #999999;
`;

export const StateNameText = styled.div``;
