import "./tokenomics.css";
import logo from "../../Image/mufasa.png";
import tax from "../../Image/tax.png";
import supply from "../../Image/supply.png";
import ca from "../../Image/ca.png";
import mapei_logo from '../../Image/mapei_wothout_bg.png'
import mapei_logo_2 from '../../Image/mapei_web.png'
import { Zoom,Fade } from "react-awesome-reveal";

export default function Tokenomics() {
  return (
    <section className="tokenomics">
      <div className="section--heading">
        <p>TOKENOMICS</p>
      </div>

      <div className="card--container">
        
        <div className="tokenomics--card">
          <Fade triggerOnce>
          <img src={mapei_logo_2} alt="picture of logo" className="token-mapei"></img>
          <p>$Mapei</p>
          </Fade>
        </div>
        <div className="card--line"></div>
        <div className="tokenomics--card">
          <Fade triggerOnce>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-params" viewBox="0 0 24 24" ><path d="M13.077 6.099c.336-.137.683-.156 1.001-.081.681.162 1.232.748 1.278 1.519-.226-.276-.524-.456-.85-.533-.328-.078-.686-.051-1.024.087-.674.275-1.093.915-1.027 1.629-.743-.852-.432-2.19.622-2.621zm.521 9.834c.658.41 2.729 1.548 4.845 4.067 1.912-.781 3.742-1.528 5.558-2.268-.823-2.021-.198-3.151-1.018-5.159-.56-1.37-1.034-1.502-1.943-1.549l.287.708c.175.426-.47.686-.642.262l-.258-.63c-.209-.515-.881-.383-1.469-.387l.35.857c.173.424-.469.688-.643.262l-.303-.744c-.215-.526-.915-.374-1.508-.364l.37.908c.175.428-.471.686-.643.263l-1.503-3.677c-.467-1.144-2.238-.466-1.756.717l2.217 5.434c-.324-.215-.922-.482-1.33-.578-1.263-.298-2.075.969-.611 1.878zm-5.858-5.311l-2.74 2.669.705.709 2.033-1.965 1.496 1.497 2.656-2.672-.422-1-2.228 2.264-1.5-1.502zm-4.658 13.378h2.628l3.42-4h-2.633l-3.415 4zm9.773-4l3.42 4h2.628l-3.415-4h-2.633zm-2.855 4h2v-4h-2v4zm3.141-6c-.902-.564-1.617-.94-2.076-2h-8.065v-13h16v6h2v-6h1v-3h-22v3h1v15h12.141z" fill="#FFFFFF"/></svg>
          <p>
            Tax
            <br />
            0/0
          </p>
          </Fade>
        </div>
        <div className="card--line"></div>
        <div className="tokenomics--card">
        <Fade triggerOnce>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-params" viewBox="0 0 24 24"><path d="M18 10c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm.5 8.474v.526h-.5v-.499c-.518-.009-1.053-.132-1.5-.363l.228-.822c.478.186 1.114.383 1.612.27.574-.13.692-.721.057-1.005-.465-.217-1.889-.402-1.889-1.622 0-.681.52-1.292 1.492-1.425v-.534h.5v.509c.362.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.257-1.222-.232-.744.043-.81.688-.29.958.856.402 1.972.7 1.972 1.773.001.858-.672 1.315-1.5 1.432zm-7.911-5.474h-2.589v-2h3.765c-.484.602-.881 1.274-1.176 2zm-.589 3h-2v-2h2.264c-.166.641-.264 1.309-.264 2zm2.727-6h-4.727v-2h7v.589c-.839.341-1.604.822-2.273 1.411zm2.273-6h-7v-2h7v2zm0 3h-7v-2h7v2zm-4.411 12h-2.589v-2h2.069c.088.698.264 1.369.52 2zm-10.589-11h7v2h-7v-2zm0 3h7v2h-7v-2zm12.727 11h-4.727v-2h3.082c.438.753.994 1.428 1.645 2zm-12.727-5h7v2h-7v-2zm0 3h7v2h-7v-2zm0-6h7v2h-7v-2z" fill="#FFFFFF"/></svg>

          <p>
            Supply <br />
            1,000,0000
          </p>
          </Fade>
        </div>
        <div className="card--line"></div>
        <div className="tokenomics--card">
        <Fade triggerOnce>
        <svg xmlns="http://www.w3.org/2000/svg"  className="svg-params" viewBox="0 0 24 24"><path d="M7.467 0c1.102.018 5.555 2.549 6.386 8.558.905-.889 1.409-3.664 1.147-4.843 3.952 2.969 6 6.781 6 11.034 0 5.094-3.43 9.251-8.963 9.251-5.728 0-9.037-3.753-9.037-8.276 0-6.26 5.052-7.62 4.467-15.724zm3.262 19.743c-.749.848-.368 1.945.763 2.045 1.035.093 1.759-.812 2.032-1.792.273-.978.09-2.02-.369-2.893-.998 1.515-1.52 1.64-2.426 2.64zm4.42 1.608c2.49-1.146 3.852-3.683 3.852-6.58 0-2.358-.94-4.977-2.5-7.04-.743 2.867-2.924 3.978-4.501 4.269.05-3.219-.318-6.153-2.602-8.438-.296 4.732-4.321 7.63-4.398 12.114-.029 1.511.514 3.203 1.73 4.415.491.489 1.054.871 1.664 1.16-.121-.608-.062-1.254.195-1.848.911-2.106 3.333-2.321 4.202-5.754.952.749 3.275 3.503 2.778 6.358-.082.469-.224.923-.42 1.344z" fill="#FFFFFF"/></svg>

          <p>
            LP <br />
            BURNED
          </p>
          </Fade>
        </div>
      </div>
      
    </section>
  );
}
