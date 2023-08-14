import React, { useEffect } from "react";
import "../css/main.css";
import "../css/details.css";
import headphones from "../css/images/headphone.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../context/MainProductContext";

function ProductDetail() {
  const navigate = useNavigate();
  const { oneProduct, getOneProduct } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <>
      {oneProduct ? (
        <div className="main-content">
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            style={{ fontSize: "70px" }}
          />
          <div class="container-details">
            <div class="box">
              <div class="images">
                <div class="img-holder active">
                  <img src={`${oneProduct.image}`} />
                </div>
                <div class="img-holder">
                  <img src={`${oneProduct.image1}`} />
                </div>
                <div class="img-holder">
                  <img src={`${oneProduct.image2}`} />
                </div>
                <div class="img-holder">
                  <img src={`${oneProduct.image3}`} />
                </div>
              </div>
              <div class="basic-info">
                <div className="title-details">{oneProduct.title}</div>
                <span>${oneProduct.price}</span>
                <form>
                  <button className="buy-btnn">Добавить в корзину</button>
                  <button className="buy-btnn">Купить прямо сейчас</button>
                </form>
              </div>
              <div class="description">
                <p>{oneProduct.text}</p>

                {/* <ul class="social">
                <li>
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default ProductDetail;
