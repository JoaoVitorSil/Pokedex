import React from "react";

const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

const Navbar = () => {
  return (
    <nav>
      <div>
        <img
            alt="pokiapi-logo" src={logoImg} className="navbar-img"
        />
      </div>
    </nav>
  );
};

export default Navbar;
