import "./header.css";
import Menu from "../../Icons/menu";
import Cancel from "../../Icons/cancel";
import React, { useEffect } from "react";
import logo from "../../Image/mufasa.png";
import logo_text from "../../Image/mufasa_logo.png";
import mufasa_home from "../../Image/mufasa_home.png";
import mapei_logo from "../../Image/mapei_web.png";
import mapei_logo_2 from "../../Image/mapei_wothout_bg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import About from "../about/about";
import Contact from "../contact/contact";
import Roadmap from "../roadmap/roadmap";
import Tokenomics from "../tokenomics/tokenomics";
import { Slide } from "react-awesome-reveal";

export default function Header() {
  const [Toggle, setToggle] = React.useState(false);

  useEffect(() => {
    Toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [Toggle]);

  return (
    <header className="header">
      <div className="d-flex align-items-center justify-content-between head--section--1">
        <div className="d-flex align-items-center justify-content-center gap-2 ">
          <img src={mapei_logo} alt="404" className="logo-img"></img>
          <p className="logo-letter">
            Ma<span className="logo-letter-sub">pei</span>
          </p>
        </div>
        <div className="categories align-items-center pe-3">
          <ul className="d-flex list-unstyled gap-4 m-0">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <AnchorLink href="#about">ABOUT</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#tokenomics">TOKENOMICS</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#roadmap">ROADMAP</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">JOIN US</AnchorLink>
            </li>
          </ul>
        </div>

        <div
          className="mobile-menu"
          onClick={() => setToggle((prevState) => !prevState)}
        >
          {Toggle ? (
            <>
              <div className="icon">
                <Cancel />
              </div>
              <ul>
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <AnchorLink href="#about">ABOUT</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#tokenomics">TOKENOMICS</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#roadmap">ROADMAP</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#contact">JOIN US</AnchorLink>
                </li>
              </ul>
            </>
          ) : (
            <div className="icon">
              <Menu />
            </div>
          )}
        </div>
      </div>

      <section className="head--section--2">
        <div>
          <Slide cascade triggerOnce>
            <p className="punch--line--base">
              Ma<span className="punch-line-base-sub">pei</span>
            </p>

            <p className="punch--line--main">
              Let's make <span className="punch-line-main-sub">America</span>{" "}
              great again with{" "}
              <span className="punch-line-main-sub">Mapei</span>
            </p>
            <p className="punch--line--desc">
              Join the movement to Make America Great Again! Together, we can
              revitalize our spirit, champion freedom, and ignite prosperity.
              Celebrate our diversity, resilience, and dreams as we work to
              restore greatness and unity for all. Let's reignite hope and drive
              America toward unparalleled success
            </p>
          </Slide>
        </div>

        <div className="pepe--img">
          <Slide direction="up" triggerOnce>
          <img
            src={mapei_logo}
            alt="a sky photo of an old city"
            width={200}
            height={300}
            className="head--img"
          />
          </Slide>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="tokenomics">
        <Tokenomics />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </header>
  );
}
