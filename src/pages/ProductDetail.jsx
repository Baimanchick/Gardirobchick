import React from "react";
import "../css/main.css";
import "../css/details.css";
import headphones from "../css/images/headphone.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-content">
        <ArrowBackIcon
          onClick={() => navigate(-1)}
          style={{ fontSize: "70px" }}
        />
        <div class="container-details">
          <div class="box">
            <div class="images">
              <div class="img-holder active">
                <img src={headphones} />
              </div>
              <div class="img-holder">
                <img src={headphones} />
              </div>
              <div class="img-holder">
                <img src={headphones} />
              </div>
              <div class="img-holder">
                <img src={headphones} />
              </div>
            </div>
            <div class="basic-info">
              <div className="title-details">Headphone</div>
              <span>$250</span>
              <form>
                <button className="buy-btnn">Добавить в корзину</button>
                <button className="buy-btnn">Купить прямо сейчас</button>
              </form>
            </div>
            <div class="description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                temporibus corporis repudiandae, consectetur nostrum nisi
                commodi placeat rerum molestias numquam nihil accusantium
                deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Molestiae nemo
                accusantium tempora facere doloremque cum iusto, ut neque, fuga
                omnis libero laborum ullam. At dolorum qui atque labore illo
                dignissimos.
              </p>

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
    </>
  );
}

export default ProductDetail;
