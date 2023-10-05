import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div>
      <>
        <a href="/test1">
          <Header />
        </a>
        <a href="/test1">
          <h2>test1</h2>
        </a>
      </>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
