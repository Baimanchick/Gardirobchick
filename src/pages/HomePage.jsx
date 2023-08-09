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
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function HomePage() {
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

        <div className="fashion">Топ товары</div>

        {/*  */}
        <main class="container">
          <section onClick={() => naivigate("/details")} class="card">
            <div class="product-image">
              <img
                src="https://isabelgarcia.by/wp-content/uploads/2020/12/fiolet_by_1308943781794875038280439048452211550030010n.jpg"
                alt="OFF-white Red Edition"
                draggable="false"
              />
            </div>
            <div class="product-info">
              <h2>Nike X OFF-white</h2>
              <p>The 10: Air Jordan 1 off-white - Chicago</p>
              <div class="price">$999</div>
            </div>
            <div class="btn">
              <button class="buy-btn">Подробнее</button>
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
