import "./cartPage.css";

import user from "../../assets/user.webp";
import remove from "../../assets/remove.png";
import Table from "../common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";

const CartPage = () => {
  return (
    <section className="cart_page align_center">
      <div className="user_info align_center">
        <img src={user} alt=" user profile" />
        <div className="">
          <p className="user_name">Harley</p>
          <p className="email">harley@gmail.com</p>
        </div>
      </div>
      {/* cart table */}
      <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
        {/*Add children Jsx, contains all data passed b/w opening and closing component*/}
        <tbody>
          <tr>
            <td>iPhone 14</td>
            <td>$999</td>
            <td className="align_center table_quantity_input">
                <QuantityInput />
            </td>
            <td>$999</td>
            <td><img src={remove} alt="remove" className="cart_remove_icon"/></td>
          </tr>
        </tbody>
      </Table>
      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>$999</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Total</td>
            <td>$1004</td>
          </tr>
        </tbody>
      </table>

      <button className="search_button checkout_button ">Checkout</button>
    </section>
  );
};

export default CartPage;
