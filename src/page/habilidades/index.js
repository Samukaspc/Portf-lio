import React from 'react';
import { FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoHtml5 } from 'react-icons/io5';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiJavascriptLine } from 'react-icons/ri';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { SiPostman, SiInsomnia } from 'react-icons/si';
import './style.css';

const habilidadesFrontend = [
  { Icon: IoLogoHtml5, name: 'HTML' },
  { Icon: FaCss3Alt, name: 'CSS' },
  { Icon: RiJavascriptLine, name: 'JavaScript' },
  { Icon: FaReact, name: 'React' },
  { Icon: TbBrandTypescript, name: 'TypeScript' },
];

const habilidadesBackend = [
  { Icon: FaNodeJs, name: 'Node.js' },
  { Icon: DiMysql, name: 'MySQL' },
  { Icon: DiMongodb, name: 'MongoDB' },
];

const outrasHabilidades = [
  { Icon: FaGitAlt, name: 'Git' },
  { Icon: FaGithub, name: 'GitHub' },
  { Icon: SiPostman, name: 'Postman' },
  { Icon: SiInsomnia, name: 'Insomnia' },
];

export default function Habilidades() {
  const renderHabilidades = (habilidades) => {
    return habilidades.map(({ Icon, name }, index) => (
      <div key={index} className="background-svg">
        <Icon size={100} />
        <span>{name}</span>
      </div>
    ));
  };

  return (
    <div id="pagina3" className="container-pai">
      <h1 >Habilidades</h1>
      <div className="container-habilidades">
        <div>
          <h2>Front-end</h2>
          <div className="habilidades">
            {renderHabilidades(habilidadesFrontend)}
          </div>
        </div>
        <div>
          <h2>Back-end</h2>
          <div className="habilidades">
            {renderHabilidades(habilidadesBackend)}
          </div>
        </div>
        <div>
          <h2>Outros</h2>
          <div className="habilidades">
            {renderHabilidades(outrasHabilidades)}
          </div>
        </div>
      </div>
    </div>
  );
}
