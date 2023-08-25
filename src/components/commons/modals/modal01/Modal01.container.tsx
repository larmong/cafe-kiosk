import {
  AddBtn,
  ModalContainer,
  OptionContainer,
  OptionTitle,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductOption,
  ProductPrice,
  ProductTop,
  Wrapper,
} from "./Modal01.style";
import { Options } from "../../option/Option.container";
import {
  ITypeProductOption,
  ITypeProducts,
} from "../../../../commons/mock/Data.types";
import { Button01 } from "../../buttons/button01/Button01.container";
import { Fragment, useEffect, useState } from "react";
import { Quantity } from "../../quantity/Quantity.container";
import { addProductState, productState } from "../../../../commons/store/store";
import { useRecoilState } from "recoil";

export const Modal01 = () => {
  const [options, setOptions] = useState([]);
  const [product] = useRecoilState<ITypeProducts>(productState);
  const [basketItem, setBasketItem] =
    useRecoilState<ITypeProducts>(addProductState);

  const onClickAddBasket = () => {
    // setBasketItem(product);
  };

  // useEffect(() => {
  //   console.log(options);
  // }, [options]);

  return (
    <Wrapper>
      <ModalContainer>
        <ProductImage></ProductImage>
        <ProductInfo>
          <ProductTop>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
              <span>{product.price}</span>원
            </ProductPrice>
            <Quantity />
          </ProductTop>
          <ProductOption>
            <OptionTitle>옵션</OptionTitle>
            {product.option?.length === 0 ? (
              <div>옵션이 없습니다.</div>
            ) : (
              <OptionContainer>
                {product.option?.map(
                  (el: ITypeProductOption, index: number) => (
                    <Fragment key={index}>
                      <Options
                        option={el}
                        options={options}
                        setOptions={setOptions}
                      />
                    </Fragment>
                  )
                )}
              </OptionContainer>
            )}
          </ProductOption>
          <AddBtn>
            <Button01 btnText="choice" onClickBtn={onClickAddBasket} />
          </AddBtn>
        </ProductInfo>
      </ModalContainer>
    </Wrapper>
  );
};
