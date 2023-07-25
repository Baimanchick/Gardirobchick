import React from "react";
import "../css/footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>Помощь</h4>
              <ul>
                <li>
                  <a href="#">Корзина</a>
                </li>
                <li>
                  <a href="#">Товары</a>
                </li>
                <li>
                  <a href="#">Домой</a>
                </li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Наши соцсети</h4>
              <div class="social-links">
                <a
                  target="_blank"
                  href="https://www.instagram.com/garderobchik191/"
                >
                  <InstagramIcon style={{ marginTop: "6.9px" }} />
                </a>
                <a target="_blank" href="https://ru.linkedin.com/">
                  <WhatsAppIcon style={{ marginTop: "6.9px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
