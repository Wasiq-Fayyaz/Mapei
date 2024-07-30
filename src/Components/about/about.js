import "./about.css";
import mufasa_1 from "../../Image/about_mufasa_1.png";
import mufasa_2 from "../../Image/about_mufasa_2.png";
import mufasa_3 from "../../Image/about_mufasa_3.png";
import mapei_logo from '../../Image/mapei_web.png'
import { Slide } from "react-awesome-reveal";

export default function About() {
  return (
    <section className="about">
      <div className="section--heading">
       
        <p>ABOUT <span className="about-sub-heading">$MAPEI</span></p>
      </div>

      <div className="about--2">
        <div>
          <h2>
          $MAGA ATH <span className="about-sub-heading">308M</span>{" "}
          $PEIPEI ATH <span className="about-sub-heading">195M</span>{" "}
          $MAGA + $PEIPEI = <span className="about-sub-heading">$MAPEI ATH ?</span>{" "}
          </h2>
          <Slide cascade triggerOnce>
          <p>
            By merging the iconic elements of MAGA and PEIPEI, MAPEI stands out in the crowded meme coin market. Don’t miss out on the next big thing.
          </p>
          
          <div className="button--container">
            <a
              href="https://t.me/Mapeierc20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button--gradient">Join Us</button>
            </a>
          </div>
          </Slide>
        </div>
        
        <Slide direction="right" triggerOnce>
        <div className="about--img--container">
          <img src={mapei_logo} alt="404" className="about--img" />
        </div>
        </Slide>
      </div>
    </section>
  );
}
