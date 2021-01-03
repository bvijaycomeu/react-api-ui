import React, { Fragment } from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Fragment>
      <header className="main-header">
        <nav className="main-header__nav">
          <ul className="main-header__item-list">
            <li className="main-header__item">
              <a className="active" href="/">Home</a>
            </li>
            <li className="main-header__item">
              <a href="/StartInstance">Start Instance</a>
            </li>
            <li className="main-header__item">
              <a href="/StopInstance">Stop Instance</a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navigation;
