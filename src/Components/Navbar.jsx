import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { items } from "./Data";
import { FaCartArrowDown } from 'react-icons/fa';

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaCartArrowDown style={{fontSize:"1.5rem"}}/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
  
          </Link>
        </div>

        {location.pathname === "/" && ( // conditional rendering
          <div className="nav-bar-wrapper">
            <div className="items">Filter by{" -> "}</div>

            <div onClick={() => setData(items)} className="items">
              No Filter
            </div>

            <div onClick={() => filterByCategory("mobiles")} className="items">
              Mobiles
            </div>

            <div onClick={() => filterByCategory("laptops")} className="items">
              Laptops
            </div>

            <div onClick={() => filterByCategory("tablets")} className="items">
              Tablets
            </div>

            <div onClick={() => filterByPrice(20000)} className="items">
              {">="}20000
            </div>

            <div onClick={() => filterByPrice(35000)} className="items">
              {">="}35000
            </div>

            <div onClick={() => filterByPrice(50000)} className="items">
              {">="}50000
            </div>

            <div onClick={() => filterByPrice(70000)} className="items">
              {">="}70000
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
