import {
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Wrapper,
} from "./Card01.style";

export const Card01UI = (props) => {
  return (
    <Wrapper>
      <ProductImage></ProductImage>
      <ProductInfo>
        <ProductName>{props.product.name}</ProductName>
        <ProductPrice>
          <span>1,500</span>원
        </ProductPrice>
      </ProductInfo>
    </Wrapper>
  );
};
