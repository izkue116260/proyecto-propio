import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { Cabecera } from './components/Cabecera';
import {
  Header,
  Footer,
  InicioSection,
  GrupoSection,
  HistoriaSection,
  EspectaculosSection,
  AgendaSection,
  FotosSection,
  ContactoSection,
} from './components';
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
        return <InicioSection />;
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
        return <InicioSection />;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        seccionActiva={seccionActiva}
        menuAbierto={menuAbierto}
        onCambiarSeccion={cambiarSeccion}
        onToggleMenu={toggleMenu}
      />
      <Cabecera />

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
        {renderContenido()}
      </Container>

      <Footer />
    </Box>
  );
};

export default App;