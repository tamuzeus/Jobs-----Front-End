import styled from "styled-components";

export const Body = styled.div`
  background-color: #f9f9f9;
  color: black;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

export const CardsContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;


export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 100%;
  transition: transform 0.5s ease;
  margin-top: 20px;
  margin-bottom: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NavigationButton = styled.button`
  font-size: 25px;
  border: none;
  background-color: #ffd700;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 35px;
  color: #6f5192;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;
  user-select: none;
  margin-left: 20px;
  margin-right: 20px;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;
