import "./footer.css";
import logo from "../../Image/mufasa.png";
import logo_text from "../../Image/mufasa_logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaMedium } from "react-icons/fa6";
import dexTools from "../../Image/dex.png"
import mapei_logo from '../../Image/mapei_web.png'

export default function Footer() {
  return (
    <footer>
      <div className="container--1">
        <img src={mapei_logo} alt="404" className="logo-img"></img>
        <p className="logo-letter">
            Ma<span className="logo-letter-sub">pei</span>
          </p>
      </div>
      <div className="container--2">
        <small>Copyright © 2024 Mapei. All rights reserved.</small>
      </div>
      <div className="container--3">
      <a href="https://x.com/Mapeierc20" target="_blank">
          <FaXTwitter className="footer--logos" title="Twitter" />
        </a>
        <a href="https://t.me/Mapeierc20" target="_blank">
          <LiaTelegramPlane className="footer--logos" title="Telegram" />
        </a>
      </div>
    </footer>
  );
}
