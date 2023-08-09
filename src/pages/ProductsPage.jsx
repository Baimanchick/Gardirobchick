import React from "react";
import "../css/main.css";
import "../css/home.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../css/images/20482622_223942934796095_1281382172543942656_n.jpg";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import check from "../css/images/1.jpg";
import Footer from "../components/Footer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";

function ProductsPage() {
  const naivigate = useNavigate();
  return (
    <>
      <div className="main-content">
        {/*  */}

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
              <li className="second-navigation__ite">
                {" "}
                <a href="#">Платье</a>{" "}
              </li>
              <li className="second-navigation__ite">
                {" "}
                <a href="#">Блуска</a>{" "}
              </li>
              <li className="second-navigation__ite">
                {" "}
                <a href="#">Юбки</a>{" "}
              </li>
              <li className="second-navigation__ite">
                {" "}
                <a href="#">Топик</a>{" "}
              </li>
              <li className="second-navigation__ite">
                {" "}
                <a href="#">Футболки</a>{" "}
              </li>
              <li className="second-navigation__ite">
                {" "}
                <a href="#">Сумки</a>{" "}
              </li>
            </ul>
          </div>

          <div className="target_linee">
            <span className="target-linee_span"></span>
          </div>
        </header>

        <div className="fashion">Товары</div>

        {/*  */}
        <main class="container">
          <section onClick={() => naivigate("/details")} class="card">
            <div class="product-image">
              <img src={check} alt="OFF-white Red Edition" draggable="false" />
            </div>
            <div class="product-info">
              <h2>Nike X OFF-white</h2>
              <p>The 10: Air Jordan 1 off-white - Chicago</p>
              <div class="price">$999</div>
            </div>
            <div class="btn">
              <button class="buy-btn">Купить сейчас</button>
              <button class="fav">
                {" "}
                <AddShoppingCartIcon />
              </button>
            </div>
          </section>
        </main>
        <div className="target_lineee">
          <span className="target-lineee_span"></span>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProductsPage;
