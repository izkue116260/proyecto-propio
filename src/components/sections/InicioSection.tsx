import React from 'react';
import { Box, Typography } from '@mui/material';
import HeroSection from './HeroSection';
import EuskalHerriaMap from '../EuskalHerriaMap';

const InicioSection: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      
      {/* Gure Taldea - Sin bordes, a todo lo ancho */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ 
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 3
        }}>
          Gure Taldea
        </Typography>
        
        <Typography variant="h6" paragraph sx={{ 
          textAlign: 'center',
          lineHeight: 1.8,
          fontSize: '1.1rem',
          color: 'text.primary',
          maxWidth: '800px',
          mx: 'auto'
        }}>
          Oberena Dantza Taldea 75 urteko historia duen dantza talde bat da, Iruñean kokatua. 
          Euskal dantzaren tradizioa mantentzen dugu, baina berritzaile izaten ere saiatzen gara.
        </Typography>
        
        <Typography variant="body1" sx={{ 
          textAlign: 'center',
          lineHeight: 1.8,
          fontSize: '1rem',
          color: 'text.secondary',
          maxWidth: '800px',
          mx: 'auto'
        }}>
          Gure espektakuloak tradizio eta modernitatea uztartzen ditu, 
          publikoari esperientzia berri eta zirraragarria eskaintzeko.
        </Typography>
      </Box>

      {/* Mapa de Euskal Herria */}
      <EuskalHerriaMap />
    </Box>
  );
};

export default InicioSection;