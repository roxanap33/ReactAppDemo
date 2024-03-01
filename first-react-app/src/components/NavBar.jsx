import React from "react";
import { NavBarContainer } from "../assets/styles/NavBarStyles";

function NavBar() {
  return (
    <NavBarContainer>
      {/* <NavLinks> */}
      <a href="/">Home</a>
      <a href="/winter">Winter</a>
      <a href="/spring">Spring</a>
      <a href="/summert">Summer</a>
      <a href="/winter">Winter</a>
      {/* </NavLinks> */}
    </NavBarContainer>
  );
}

export default NavBar;
