import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import CreateOrder from "./pages/CreateOrder/CreateOrder";
import Order from "./pages/Order/Order";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/createOrder",
        element: <CreateOrder />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
