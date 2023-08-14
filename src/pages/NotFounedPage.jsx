import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

function NotFounedPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="tipo navbar">
        <KeyboardBackspaceIcon
          onClick={() => navigate(-1)}
          style={{ fontSize: "60px" }}
        />
      </div>

      <div
        style={{
          fontSize: "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw", // Ширина равна 100% ширины окна просмотра
          height: "100vh", // Высота равна 100% высоты окна просмотра
        }}
      >
        <span>Извините, но такой страницы не существует :(</span>
      </div>
    </>
  );
}

export default NotFounedPage;
