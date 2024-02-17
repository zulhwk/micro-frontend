import React, { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: FC = () => (
  <div>
    <Header />
    <main style={{ minHeight: '70vh' }} className="h-full">
      <div className="px-20 py-10">
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
);

export default Layout