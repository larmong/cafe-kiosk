import { CardContainer, ProductContainer, Wrapper } from "./Contents.style";
import Menu from "../../../commons/menu/Menu.container";
import { useState } from "react";
import { Card01 } from "../../../commons/cards/card01/Card01.container";
import { Modal01 } from "../../../commons/modals/modal01/Modal01.container";
import { ITypeProducts } from "../../../../commons/mock/Data.types";

export const ContentsUI = () => {
  const [isCate, setIsCate] = useState("coffee");
  const [cardList, setCardList] = useState([
    {
      name: "아메리카노",
      price: 1500,
      option: [
        {
          name: "약하게",
          price: 0,
        },
        {
          name: "2샷",
          price: 500,
        },
      ],
    },
    {
      name: "헤이즐넛아메리카노",
      price: 2000,
      option: [
        {
          name: "약하게",
          price: 0,
        },
        {
          name: "2샷",
          price: 500,
        },
      ],
    },
    {
      name: "허니아메리카노",
      price: 2000,
      option: [
        {
          name: "약하게",
          price: 0,
        },
        {
          name: "2샷",
          price: 500,
        },
      ],
    },
    {
      name: "에스프레소",
      price: 2000,
      option: [
        {
          name: "약하게",
          price: 0,
        },
        {
          name: "2샷",
          price: 500,
        },
      ],
    },
  ]);
  const [modalData, setModalData] = useState({});
  const [isModal, setIsModal] = useState(false);

  const onClickOpenModal = (product: ITypeProducts) => () => {
    setModalData(product);
    setIsModal((prev: boolean) => !prev);
  };

  return (
    <Wrapper>
      <Menu isCate={isCate} setIsCate={setIsCate} />
      <ProductContainer>
        <CardContainer>
          {cardList.map((el: ITypeProducts, index: number) => (
            <Card01
              key={index}
              product={el}
              onClickOpenModal={onClickOpenModal}
            />
          ))}
        </CardContainer>
      </ProductContainer>
      {isModal && <Modal01 product={modalData} />}
    </Wrapper>
  );
};
