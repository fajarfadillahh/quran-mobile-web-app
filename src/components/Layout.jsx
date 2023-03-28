import React from "react";

// import components
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
        <Navbar />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
