import { useState, useEffect } from "react";
import { BodyFooter, BodyImg, ImgArea } from "./styled";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BodyFooter isVisible={isVisible}>
      <ImgArea>
        <BodyImg src="https://oamarelinho.com.br/_next/static/media/flamboyantgroup_final.b63b5715.svg" />
      </ImgArea>
    </BodyFooter>
  );
}
