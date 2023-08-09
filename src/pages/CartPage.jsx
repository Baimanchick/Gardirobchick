import React from "react";
import "../css/main.css";
import "../css/cart.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../css/images/20482622_223942934796095_1281382172543942656_n.jpg";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import check from "../css/images/1.jpg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const naivigate = useNavigate();
  return (
    <>
      <div className="main-content">
        <header>
          <nav className="navbar">
            <div className="container-navbar">
              <input
                class="input-navbar"
                name="text"
                placeholder="Search..."
                type="search"
              />
              <ul className="navigation">
                <ShoppingCartIcon onClick={() => naivigate("/cart")} />
                <li className="navigation__item">
                  <a href="/cart">Корзина</a>
                </li>
                <CheckroomIcon onClick={() => naivigate("/products")} />
                <li className="navigation__item">
                  <a href="/products">Товары</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="target_line">
            <span className="target-line_span"></span>
          </div>

          <div className="second-navbar">
            <div className="main-thing">
              <div className="main-title">
                <a href="/">Gардеробчик</a>
              </div>
              <img
                onClick={() => naivigate("/")}
                src={logo}
                className="main-logo"
              />
            </div>

            <ul className="second-navigation">
              <li className="second-navigation__itemm">
                {" "}
                <a href="tel:+996505239903">0505 239903</a>{" "}
              </li>
            </ul>
          </div>

          <div className="target_linee">
            <span className="target-linee_span"></span>
          </div>
        </header>
        <div className="small-container cart-page ">
          <table>
            <tr>
              <th>Product</th>
              <th>Product</th>
              <th>Product</th>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src={check} />
                  <div>
                    <p>Red Printed Tshirt</p>
                    <small>Price: $50</small>
                    <br />
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$50</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Product</th>
              <th>Product</th>
              <th>Product</th>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src={check} />
                  <div>
                    <p>Red Printed Tshirt</p>
                    <small>Price: $50</small>
                    <br />
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$50</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Product</th>
              <th>Product</th>
              <th>Product</th>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src={check} />
                  <div>
                    <p>Red Printed Tshirt</p>
                    <small>Price: $50</small>
                    <br />
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$50</td>
            </tr>
          </table>

          <div className="total-price">
            <table>
              <tr>
                <td>Subtotal</td>
                <td>$200</td>
              </tr>
            </table>
            <table>
              <tr>
                <td>Tax</td>
                <td>$35</td>
              </tr>
            </table>
            <table>
              <tr>
                <td>Total </td>
                <td>$200</td>
              </tr>
            </table>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default CartPage;
