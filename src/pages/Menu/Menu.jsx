import React from "react";
import { fetchMenuData } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function Menu() {
  const menu = useLoaderData();
  return (
    <div>
      Menu
      {menu.map((pizza) => {
        return <MenuItem pizza={pizza} key={pizza.id} />;
      })}
    </div>
  );
}

async function loader() {
  const menu = await fetchMenuData();
  return menu;
}
export { loader };
