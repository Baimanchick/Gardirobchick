import "../css/main.css";
import "../css/admin.css";
import React, { useEffect } from "react";
import { useProductContext } from "../context/MainProductContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { notify } from "../components/Toastify";

function AdminPage() {
  const { products, getProducts, deleteProduct } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <header role="banner">
        <div className="main-title_admin">Admin Panel</div>
        <ul class="utilities">
          <br />
          <li class="users">
            <a href="#">Admin</a>
          </li>
          <li class="logout warn">
            <a href="">Log Out</a>
          </li>
        </ul>
      </header>

      <nav role="navigation">
        <ul class="main">
          <li className="top-tovary">
            <div className="title-main_page">Топ товары</div>
          </li>
          <li class="dashboard">
            <a href="admindashboard">Добавить продукт</a>
          </li>
          <li class="edit">
            <a href="#">Изменить продукт</a>
          </li>
          <li class="write">
            <a href="#"></a>
          </li>
          <li class="comments">
            <a href="#">-</a>
          </li>
          <li class="users">
            <a href="#">-</a>
          </li>
        </ul>
      </nav>

      <main role="main">
        <section class="panel important">
          <h2>Топ товары</h2>
        </section>

        <section class="panel important">
          {products.map((item) => {
            return (
              // <div>
              //   <div className="id-admin">{item.id}</div>
              //   <div className="admin-title">{item.title}</div>
              //   <img className="admin-image" src={`${item.image}`} />
              //   <div className="admin-price">${item.price}</div>
              //   <p className="admin-desc">{item.description}</p>
              // </div>

              <section class="cardd">
                <div className="id-admin">{item.id}.</div>
                <div class="product-image">
                  <img
                    src={`${item.image}`}
                    alt="OFF-white Red Edition"
                    draggable="false"
                  />
                </div>
                <div class="product-info">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div class="price">${item.price}</div>
                </div>
                <div class="btn">
                  <button
                    onClick={() => deleteProduct(item.id)}
                    class="buy-btn"
                  >
                    Удалить
                  </button>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default AdminPage;
