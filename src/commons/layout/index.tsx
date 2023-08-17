import { Fragment } from "react";
import styled from "@emotion/styled";

interface ILayoutProps {
  children: JSX.Element;
}

const Page = styled.div`
`;

export default function Layout(props: ILayoutProps) {
  return (
    <Fragment>
        <Page>{props.children}</Page>
    </Fragment>
  );
}
