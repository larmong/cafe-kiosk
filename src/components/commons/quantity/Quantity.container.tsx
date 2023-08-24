import { Minus, Plus, Wrapper } from "./Quantity.style";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";

export const Quantity = () => {
  const [quantity, setQuantity] = useState(10);
  const onClickBtn = (button: string) => () => {
    if (button === "minus") {
      if (quantity === 1) {
        alert("최소 수량은 1개 입니다.");
      } else {
        setQuantity((prev: number) => prev - 1);
      }
    } else if (button === "plus") {
      setQuantity((prev: number) => prev + 1);
    }
  };

  return (
    <Wrapper>
      <Minus onClick={onClickBtn("minus")}>
        <AiFillMinusCircle />
      </Minus>
      <span>{quantity}</span>
      <Plus onClick={onClickBtn("plus")}>
        <AiFillPlusCircle />
      </Plus>
    </Wrapper>
  );
};
