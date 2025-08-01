import React from 'react';
import styles from './InicioSection.module.css';

const CREACION_GRUPO = 1941;

const HeroSection: React.FC = () => {
  const edadGrupo = new Date().getFullYear() - CREACION_GRUPO;

  return (
    <div className={styles.cabecera}>
      <h1 className={styles.tituloPrincipal}>
        Oberena Dantza taldea
      </h1>
      <p className={styles.subtitulo}>
        Iturri zaharretik, indar berriz
      </p>
      <div className={styles.tag}>
        <span>
          {edadGrupo} urte dantzan
        </span>
      </div>
    </div>
  );
};

export default HeroSection;