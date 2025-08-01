import React, { useState } from 'react';
import { Cabecera } from './components/Cabecera';
import { Taldea } from './components/sections/Taldea';
import {
  Header,
  Footer,
  GrupoSection,
  HistoriaSection,
  EspectaculosSection,
  AgendaSection,
  FotosSection,
  ContactoSection,
} from './components';
import styles from './general.module.css';
import './App.css';

type Seccion = 'inicio' | 'grupo' | 'historia' | 'espectaculos' | 'agenda' | 'fotos' | 'contacto';

const App: React.FC = () => {
  const [seccionActiva, setSeccionActiva] = useState<Seccion>('inicio');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cambiarSeccion = (seccion: Seccion) => {
    setSeccionActiva(seccion);
    setMenuAbierto(false);
  };

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const renderContenido = () => {
    switch (seccionActiva) {
      case 'inicio':
        return <Taldea />;
      case 'grupo':
        return <GrupoSection />;
      case 'historia':
        return <HistoriaSection />;
      case 'espectaculos':
        return <EspectaculosSection />;
      case 'agenda':
        return <AgendaSection />;
      case 'fotos':
        return <FotosSection />;
      case 'contacto':
        return <ContactoSection />;
      default:
        return <Taldea />;
    }
  };

  return (
    <>
      <Header
        seccionActiva={seccionActiva}
        menuAbierto={menuAbierto}
        onCambiarSeccion={cambiarSeccion}
        onToggleMenu={toggleMenu}
      />
      {seccionActiva === 'inicio' && <Cabecera />}

      <div className={styles.layout} style={{ marginTop: seccionActiva !== 'inicio' ? '100px' : '0px' }}>
        {renderContenido()}
      </div>

      <Footer />
    </>
  );
};

export default App;