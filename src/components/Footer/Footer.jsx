import { useState } from "react";
import style from "./Footer.module.css";

function Footer() {
  const [switchOnOff, setSwitchOnOff] = useState(false);

  return (
    <div className={`${style.Footer} ${switchOnOff ? style.FooterOn : null}`}>
      <p>Soy el Fucking Footer</p>
      <button
        onClick={() => {
          setSwitchOnOff(!switchOnOff);
        }}
      >
        On / Off{" "}
      </button>
    </div>
  );
}

export default Footer;
