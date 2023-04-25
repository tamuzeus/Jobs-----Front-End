import Cards from "../cards/index";
import { Body } from "./styled";

export default function BodyArea({ jobs }) {
  return (
    <Body>
      <Cards jobs={jobs} />
    </Body>
  );
}
