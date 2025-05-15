import React from "react";
import Header from "./Header";
import Main from "./Main";
import CartOverView from "../pages/Cart/CartOverView";
import { Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet/>
      </Main>
      <CartOverView />
    </>
  );
}
