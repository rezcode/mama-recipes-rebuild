import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className="container text-center">
          <span className="text-muted">Copyright Ⓒ 2022 Rezcode</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
