import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 600px;
  height: 400px;
  background: ${Common.color.white};
  border-radius: 10px;
  padding: 30px;
  gap: 30px;
`;

export const ProductImage = styled.div`
  width: 200px;
  height: 100%;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ProductInfo = styled.div`
  width: calc(100% - 200px);
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

export const ProductTop = styled.div`
  padding: 1em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${Common.color.line};
  align-items: center;
`;

export const ProductName = styled.h5`
  font-size: 2em;
`;

export const ProductPrice = styled.p`
  display: flex;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  span {
    display: inline-block;
    margin-bottom: 2px;
    margin-right: 3px;
    font-size: 1.3em;
    color: ${Common.color.point};
  }
`;

export const ProductOption = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const OptionTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.3em;
  font-weight: bold;
  height: 43px;
`;
export const OptionContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddBtn = styled.div`
  width: 100%;
  height: 45px;
  margin-top: auto;
`;
