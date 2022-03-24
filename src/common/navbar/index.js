import React from "react";
import { Container, Img, NavButton } from "./styles";
import NavLogo from "assets/navLogo.png";
import { goTo } from "utils";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Img onClick={() => navigate("/")} alt="img" src={NavLogo} />
      <NavButton onClick={() => goTo("https://github.com")}>Github</NavButton>
    </Container>
  );
};

export default Navbar;
