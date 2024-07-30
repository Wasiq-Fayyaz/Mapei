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
        <h3>HIGHLIGHTS</h3>
        <p>ABOUT MAPEI</p>
      </div>

      <div className="about--2">
        <div>
          <h2>
          $MAGA ATH 308M, $PEIPEI ATH 195M.  $MAGA +PEIPEI = $MAPEI?
          $MAGA ATH <span className="about-sub-heading">308M</span>{" "}
          $PEIPEI ATH<span className="about-sub-heading">195M</span>
          $MAGA ATH <span className="about-sub-heading">308M</span>{" "}
          </h2>
          <Slide cascade triggerOnce>
          <p>
            Revitalize the American spirit and join the movement to Make America
            Great Again! As we embrace innovation, champion freedom, and ignite
            prosperity, we pave the way for a brighter future. Together, we
            celebrate the strength of our diverse communities, the resilience of
            our people, and the promise of a nation built on dreams and
            determination. <br /> <br /> Stand with us as we work to restore
            greatness, foster unity, and create opportunities for all. Let’s
            reignite the flame of hope and drive America towards an era of
            unparalleled success and unity!
          </p>
          
          <div className="button--container">
            <a
              href="https://t.me/MufasaPortal"
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
