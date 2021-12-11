import React from "react";
import Link from "next/link";

const Header = ({ global, menu }) => {
  const { items } = menu || {};
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1 className="text-light">
            <Link href="/">
              <span>{global?.siteName}</span>
            </Link>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            {items.map((item) => {
              const { id, text, slug } = item || {};
              return (
                <li key={id} className="item-leaf">
                  <Link className="active " href={slug}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
