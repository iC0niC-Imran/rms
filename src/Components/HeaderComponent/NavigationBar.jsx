import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function NavigationBar() {
  return (
    <div>
      <Navbar dark color="dark">
        <div>
          <NavbarBrand hrtf="/">Imran's Restaurant</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
