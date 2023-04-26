import styled from "styled-components";

export const Body = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  background-image: url('https://oamarelinho.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-banner-home.dfb0a848.jpg&w=2048&q=100');
  background-size: cover;
  background-repeat: repeat-y;
  color: black;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 100px;
  box-sizing: border-box;
  filter: sepia(100%) saturate(1.5);
  position: absolute;
  z-index: 1;
`;

export const CardsContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #f9f9f9;
  z-index: 2;
  margin-top: 20px;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    border-radius: 0;
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

  @media screen and (max-width: 768px) {
    margin-top: 900px;
    display: flex;
    margin-left: 8px;
    margin-right: 8px;
  }
`;
