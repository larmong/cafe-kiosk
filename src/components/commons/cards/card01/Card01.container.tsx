import { IPropsCard01 } from "./Card01.types";
import {
  AddBtn,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Wrapper,
} from "./Card01.style";
import { Button01 } from "../../buttons/button01/Button01.container";

export const Card01 = (props: IPropsCard01) => {
  const onClickBtn = () => {};

  return (
    <Wrapper>
      <ProductImage></ProductImage>
      <ProductInfo>
        <ProductName>{props.product.name}</ProductName>
        <ProductPrice>
          <span>{props.product.price}</span>원
        </ProductPrice>
        <AddBtn>
          <Button01 btnText="choice" onClickBtn={onClickBtn} />
        </AddBtn>
      </ProductInfo>
    </Wrapper>
  );
};
