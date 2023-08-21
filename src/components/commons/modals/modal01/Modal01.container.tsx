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
import { ITypeProductOption } from "../../../../commons/mock/Data.types";
import { IPropsModal01 } from "./Modal01.types";
import { Button01 } from "../../buttons/button01/Button01.container";
import { Fragment, useState } from "react";

export const Modal01 = (props: IPropsModal01) => {
  const [options, setOptions] = useState([]);
  const [addProduct, setAddProduct] = useState({});

  const onClickAddBasket = () => {
    console.log(addProduct);
  };

  return (
    <Wrapper>
      <ModalContainer>
        <ProductImage></ProductImage>
        <ProductInfo>
          <ProductTop>
            <ProductName>{props.product.name}</ProductName>
            <ProductPrice>
              <span>{props.product.price}</span>원
            </ProductPrice>
            <div>- 1 +</div>
          </ProductTop>
          <ProductOption>
            <OptionTitle>옵션</OptionTitle>
            {props.product.option?.length === 0 ? (
              <div>옵션이 없습니다.</div>
            ) : (
              <OptionContainer>
                {props.product.option?.map(
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
            <Button01
              btnText="choice"
              onClickBtn={onClickAddBasket(addProduct)}
            />
          </AddBtn>
        </ProductInfo>
      </ModalContainer>
    </Wrapper>
  );
};
