import React from "react";
import { Container, Img, NavButton } from "./styles";
import NavLogo from "assets/navLogo.png";
import { goTo } from "utils";

const Navbar = () => {
  return (
    <Container>
      <Img alt="img" src={NavLogo} />
      <NavButton onClick={() => goTo("https://github.com")}>Github</NavButton>
    </Container>
  );
};

export default Navbar;
