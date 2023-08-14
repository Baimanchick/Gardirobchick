import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/home.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../css/images/20482622_223942934796095_1281382172543942656_n.jpg";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import check from "../css/images/1.jpg";
import Footer from "../components/Footer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate, useSearchParams } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useProductContext } from "../context/MainProductContext";
import { Box, Pagination } from "@mui/material";
import { LIMIT } from "../utils/consts";

function HomePage() {
  const { products, getProducts, pageTotalCount, deleteProduct } =
    useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputVal, setInputVal] = useState(
    searchParams.get("title_like") || ""
  );
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [page, setPage] = useState(+searchParams.get("_page") || 1);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    if (category === "all") {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: 1,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: 1,
      });
    }
    setPage(1);
  }, [inputVal, category]);

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: page,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: page,
      });
    }
  }, [page]);

  useEffect(() => {
    if (pageTotalCount < page) {
      setPage(pageTotalCount);
    }
  }, [pageTotalCount]);

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
          {products.map((item) => {
            return (
              <section class="card">
                <div class="product-image">
                  <img
                    src={`${item.image}`}
                    alt="OFF-white Red Edition"
                    draggable="false"
                    onClick={() => naivigate(`/details/${item.id}`)}
                  />
                </div>
                <div class="product-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div class="price">${item.price}</div>
                </div>
                <div class="btn">
                  <button class="buy-btn" onClick={() => naivigate("/details")}>
                    Подробнее
                  </button>
                  <button class="fav">
                    {" "}
                    <AddShoppingCartIcon />
                  </button>
                </div>
              </section>
            );
          })}
        </main>

        <Box sx={{ maxWidth: "max-content", margin: "20px auto" }}>
          <Pagination
            onChange={(e, p) => setPage(p)}
            page={page}
            count={pageTotalCount}
            color="primary"
          />
        </Box>

        <div className="target_lineee">
          <span className="target-lineee_span"></span>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
