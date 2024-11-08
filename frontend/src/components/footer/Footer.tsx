import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          Built With love by
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"linkedin/in/v-athithyaramaa1"}
            >
              V ATHITHYA RAMAA & Team
            </Link>
          </span>
          💘
        </p>
        <h1
          style={{
            fontSize: "20px",
            textAlign: "center",
            padding: "20px",
            fontStyle: "italic",
          }}
        >
          TEAM DevVengers ~ Content CoPilot
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
