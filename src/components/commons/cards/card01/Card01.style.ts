import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  height: 230px;
  padding: 1em;
  border-radius: 10px;
  background: ${Common.color.white};
`;

export const ProductImage = styled.div`
  width: 160px;
  height: 100%;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ProductInfo = styled.div`
  width: calc(100% - 160px);
  padding: 20px 0;
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

export const ProductName = styled.h5`
  font-size: 1.6em;
`;
export const ProductPrice = styled.p`
  display: flex;
  align-items: center;
  font-size: 1em;
  font-weight: bold;
  span {
    display: inline-block;
    margin-bottom: 2px;
    margin-right: 3px;
    font-size: 1.3em;
    color: ${Common.color.point};
  }
`;
