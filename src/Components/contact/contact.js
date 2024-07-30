import "./contact.css";
import React from "react";
import Typewriter from "typewriter-effect";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaMedium } from "react-icons/fa6";
import etherscan from "../../Image/etherscan.png";
import dextools from "../../Image/dex.png";
import { Fade,Slide } from "react-awesome-reveal";

export default function Contact() {
  return (
    <secton className="contact">
      <div className="section--heading">
        <h3>REVOLUTION</h3>
        <p>JOIN THE LAUNCH</p>
      </div>

      <div className="contact--top">
        <div className="contact--container">
          <div className="contact--headings">
            <h2>Time to Fill Your Bags</h2>
            <Slide cascade triggerOnce>
            <div className="typewriter--text">
              
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("#MAPEI")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("#MAKEAMERICAGREATAGAIN")
                    .start();
                }}
              />
              
            </div>
            </Slide>
          </div>
        </div>
        <Slide direction="up" triggerOnce>
        <div className="animation--container">
          <iframe src="https://lottie.host/embed/f25334c6-6205-4f6b-81af-5510e2e87231/IktyeLs7N9.json"
          className="animation"></iframe>
        </div>
        </Slide>
      </div>
      <div className="social--media--container">
        <Fade cascade triggerOnce>
        <a
          href="https://x.com/Mapeierc20"
          target="_blank"
        >
          <FaXTwitter className="social--media--logos" title="Twitter" />
        </a>
        <a href="https://t.me/Mapeierc20" target="_blank">
          <LiaTelegramPlane className="social--media--logos" title="Telegram" />
        </a>
        </Fade>
      </div>
    </secton>
  );
}
