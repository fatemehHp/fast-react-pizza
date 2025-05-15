import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import CreateOrder from "./pages/CreateOrder/CreateOrder";
import Order from "./pages/Order/Order";
import AppLayout from "./layout/AppLayout";
import { loader } from "./pages/Menu/Menu";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: loader,
        errorElement: <Error />,
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
