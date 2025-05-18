const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// fetch menu item
async function fetchMenuData() {
  const response = await fetch(`${API_URL}/menu`);
  if (!response.ok) {
    throw Error("filed getting menu");
  }
  const { data } = await response.json();
  return data;
}
// fetch data
async function getOrder(id) {
  const response = await fetch(`${API_URL}/order/${id}`);
  if (!response.ok) {
    throw Error(`Couldn't find order #${id}`);
  }
  const data = await response.json();
  return data;
}

// create Order
async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export { fetchMenuData, getOrder,createOrder };
