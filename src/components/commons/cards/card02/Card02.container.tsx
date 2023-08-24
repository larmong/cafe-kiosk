import {
  Delete,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductQuantity,
  Wrapper,
} from "./Card02.style";
import { Quantity } from "../../quantity/Quantity.container";
import { IoCloseSharp } from "react-icons/io5";

export const Card02 = () => {
  const onClickDelete = () => {};

  return (
    <Wrapper>
      <Delete onClick={onClickDelete}>
        <IoCloseSharp />
      </Delete>
      <ProductImage></ProductImage>
      <ProductInfo>
        <ProductName>헤이즐넛아메리카노</ProductName>
        <ProductPrice>
          <span>2,500</span>원
        </ProductPrice>
        <ProductQuantity>
          <Quantity />
        </ProductQuantity>
      </ProductInfo>
    </Wrapper>
  );
};
