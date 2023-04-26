import { useState } from "react";
import {
  Header,
  HeaderZoneOne,
  HeaderZoneTwo,
  PageTittle,
  Point,
  SearchArea,
  SearchInput,
  IconArea,
  Divider,
  IconImg,
} from "./styled";

export default function HeaderComponent({ onSearch }) {
  const [nameInput, setNameInput] = useState("");
  const [cityInput, setCityInput] = useState("");

  //Receber os inputs:

  const handleNameInputChange = (event) => {
    const value = event.target.value;
    setNameInput(value);
    onSearch(value, cityInput);
  };

  const handleCityInputChange = (event) => {
    const value = event.target.value;
    setCityInput(value);
    onSearch(nameInput, value);
  };

  return (
    <>
      <Header>
        <HeaderZoneOne>
          <PageTittle>{"o Amarelinho"}</PageTittle>
          <Point>{"."}</Point> 
        </HeaderZoneOne>

        <HeaderZoneTwo>
          <SearchArea>
            <>
              <IconArea>
                <IconImg src="https://oamarelinho.com.br/_next/static/media/ico-search.3822e5d4.svg" />
              </IconArea>
              <SearchInput
                value={nameInput}
                onChange={handleNameInputChange}
                placeholder="Digite aqui a vaga que você procura!"
              />
            </>
            <Divider />
            <>
              <IconArea>
                <IconImg src="https://oamarelinho.com.br/_next/static/media/ico-map-pin.943ecfe2.svg" />
              </IconArea>
              <SearchInput
                value={cityInput}
                onChange={handleCityInputChange}
                placeholder="Digite a cidade da vaga!"
              />
            </>
          </SearchArea>
        </HeaderZoneTwo>
      </Header>
    </>
  );
}
