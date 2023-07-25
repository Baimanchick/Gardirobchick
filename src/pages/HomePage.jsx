import React from "react";
import "../css/main.css";
import "../css/home.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../css/images/20482622_223942934796095_1281382172543942656_n.jpg";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import check from "../css/images/1.jpg";
import Footer from "../components/Footer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function HomePage() {
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
                <ShoppingCartIcon />
                <li className="navigation__item">Корзина</li>
                <CheckroomIcon />
                <li className="navigation__item">Товары</li>
              </ul>
            </div>
          </nav>
          <div className="target_line">
            <span className="target-line_span"></span>
          </div>

          <div className="second-navbar">
            <div className="main-thing">
              <div className="main-title">Gардеробчик</div>
              <img src={logo} className="main-logo" />
            </div>

            <ul className="second-navigation">
              <li className="second-navigation__item">Платье</li>
              <li className="second-navigation__item">Блуска</li>
              <li className="second-navigation__item">Юбки</li>
              <li className="second-navigation__item">Топик</li>
              <li className="second-navigation__item">Футболки</li>
              <li className="second-navigation__item">Сумки</li>
            </ul>
          </div>

          <div className="target_linee">
            <span className="target-linee_span"></span>
          </div>
        </header>

        <main class="container">
          <section class="card">
            <div class="product-image">
              <img src={check} alt="OFF-white Red Edition" draggable="false" />
            </div>
            <div class="product-info">
              <h2>Nike X OFF-white</h2>
              <p>The 10: Air Jordan 1 off-white - Chicago</p>
              <div class="price">$999</div>
            </div>
            <div class="btn">
              <button class="buy-btn">Купить сейчас </button>
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

export default HomePage;
