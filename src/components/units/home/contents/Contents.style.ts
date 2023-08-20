import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const ProductContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  > div {
    width: calc(33.33% - 13.33px);
  }
`;
