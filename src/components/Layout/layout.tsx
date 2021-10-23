import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

import styled from "@emotion/styled";

interface LayoutInterface {
  matches: boolean;
}

const LayoutStyled = styled.div<LayoutInterface>`
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;

  .circle {
    position: absolute;
    background: var(--mainColor);
    width: ${props => (props.matches ? "240px" : "160px")};
    height: ${props => (props.matches ? "240px" : "160px")};
    top: ${props => (props.matches ? "-80px" : "-40px")};
    right: ${props => (props.matches ? "-80px" : "-40px")};
    border-radius: 50%;
  }

  .children {
    margin: ${props =>
      props.matches ? "3rem 8rem 1rem 8rem" : "3rem 2rem 1rem 2rem"};
  }
`;

const Layout: React.FC = ({ children }) => {
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <LayoutStyled matches={matches}>
      <div className="circle" />
      <div className="children">{children}</div>
    </LayoutStyled>
  );
};

export default Layout;
