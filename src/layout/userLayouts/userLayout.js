import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

function UserLayout(props) {
  return (
    <>
    
      <Header />
      <main>{props.children}</main>
      <Footer />
      
    </>
  );
}

export default UserLayout;
