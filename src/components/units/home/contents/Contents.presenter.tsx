import { Wrapper } from "./Contents.style";
import Menu from "../../../commons/menu/Menu.container";
import { useState } from "react";
import { Card01 } from "../../../commons/cards/card01/Card01.container";

export const ContentsUI = () => {
  const [isCate, setIsCate] = useState("coffee");

  return (
    <Wrapper>
      <Menu isCate={isCate} setIsCate={setIsCate} />
      <Card01 />
    </Wrapper>
  );
};
