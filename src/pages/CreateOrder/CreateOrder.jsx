import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

function PizzaOrderForm() {
  const navigation=useNavigation()
  const isSubmitting=navigation.state==="submitting"
  return (
    <Form style={styles.form} method="POST">
      <h2>فرم سفارش پیتزا 🍕</h2>

      <label style={styles.label}>
        customer:
        <input type="text" name="customer" style={styles.input} required />
      </label>

      <label style={styles.label}>
        phone:
        <input type="tel" name="phone" style={styles.input} required />
      </label>

      <label style={styles.label}>
        address:
        <textarea name="address" style={styles.textarea} required />
      </label>

      <button type="submit" style={styles.button} disabled={isSubmitting}>
      {isSubmitting?"placing order":"order now"}
      </button>
    </Form>
  );
}
async function action({ request }) {
  const formData = await request.formData();
  console.log(formData);
  const newOrder = Object.fromEntries(formData);
  const newData = {
    ...newOrder,
    cart: [
      {
        pizzaId: 6,
        name: "Margarita",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
      },
    ],
    priority: false,
  };
  const order = await createOrder(newData); // فرستادن به API
  return redirect(`/order/${order.id}`);
}

const styles = {
  form: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    background: "#ffe5ec",
    borderRadius: "10px",
    fontFamily: "sans-serif",
    direction: "rtl",
  },
  label: {
    display: "block",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "8px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#d63384",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default PizzaOrderForm;
export { action };
