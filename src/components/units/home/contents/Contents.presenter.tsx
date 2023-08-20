import { CardContainer, ProductContainer, Wrapper } from "./Contents.style";
import Menu from "../../../commons/menu/Menu.container";
import { useState } from "react";
import { Card01 } from "../../../commons/cards/card01/Card01.container";

export const ContentsUI = () => {
  const [isCate, setIsCate] = useState("coffee");
  const [cardList, setCardList] = useState([
    {
      name: "아메리카노",
      price: "1,500",
      option: [
        {
          name: "약하게",
          price: "500",
        },
        {
          name: "약하게",
          price: "500",
        },
      ],
    },
    {
      name: "헤이즐넛 아메리카노",
      price: "2,000",
      option: [
        {
          name: "약하게",
          price: "500",
        },
        {
          name: "약하게",
          price: "500",
        },
      ],
    },
    {
      name: "디카페인",
      price: "2,000",
      option: [
        {
          name: "약하게",
          price: "500",
        },
        {
          name: "약하게",
          price: "500",
        },
      ],
    },
  ]);

  return (
    <Wrapper>
      <Menu isCate={isCate} setIsCate={setIsCate} />
      <ProductContainer>
        <CardContainer>
          {cardList.map((el) => (
            <Card01 product={el} />
          ))}
        </CardContainer>
      </ProductContainer>
    </Wrapper>
  );
};
