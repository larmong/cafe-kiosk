import styled from "@emotion/styled";
import { Basket } from "../../components/commons/layout/basket/Basket.container";
import { Footer } from "../../components/commons/layout/footer/Footer.container";
import { Common } from "../style/emotion";

interface ILayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;
const Page = styled.div`
  width: calc(100vw - 300px);
  border-right: 1px solid ${Common.color.line};
  background: ${Common.color.bg};
`;

export default function Layout(props: ILayoutProps) {
  return (
    <Wrapper>
      <Page>
        {props.children}
        <Footer />
      </Page>
      <Basket />
    </Wrapper>
  );
}
