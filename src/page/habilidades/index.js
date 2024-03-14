import { FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { DiMongodb, DiMysql } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { SiInsomnia } from "react-icons/si";
import './style.css'
export default function Habilidades() {
  return (
    <div id="pagina3" className="container-pai" >
      <div className="header-conatiner">
        <h1>Habilidades</h1>
      </div>
      <div className="container-habilidades">
        <h1>Front-end</h1>
        <h1>Back-end</h1>
        <h1>Outros</h1>
      </div>
      <div className="container-habilidades">
        <div className="habilidades">

          <div className="background-svg">
            <IoLogoHtml5 size={100} />
            {/* <span>HTML</span> */}
          </div>
          <div className="background-svg">

            <FaCss3Alt size={100} />
            {/* <span>CSS</span> */}
          </div>
          <div className="background-svg">
            <RiJavascriptLine size={100} />
            {/* <span>Javascript</span> */}
          </div>
          <div className="background-svg">
            <FaReact size={100} />
            {/* <span>React</span> */}
          </div>
          <div className="background-svg">
            <TbBrandTypescript size={100} />
            {/* <span>Typescript</span> */}
          </div>
        </div>
        <div className="habilidades">

          <div className="background-svg">
            <FaNodeJs size={100} />
            {/* <span>Node.js  </span> */}
          </div>
          <div className="background-svg">
            <DiMysql size={100} />
            {/* <span>MySQL</span> */}
          </div>
          <div className="background-svg">
            <DiMongodb size={100} />
            {/* <span>MongoDB</span> */}
          </div>

        </div>
        <div className="habilidades">

          <div className="background-svg">
            <FaGitAlt size={100} />
            {/* <span>Git</span> */}
          </div>
          <div className="background-svg">
            <FaGithub size={100} />
            {/* <span>GitHub  </span> */}
          </div>
          <div className="background-svg">
            <SiPostman size={100} />
            {/* <span>Postman</span> */}
          </div>
          <div className="background-svg">
            <SiInsomnia size={100} />
            {/* <span>Insomnia</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}