import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { imageUrls } from '../../data/imageUrls';

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      mb: 6, 
      py: 8, 
      background: `linear-gradient(rgba(211, 47, 47, 0.7), rgba(27, 94, 32, 0.7)), url(${imageUrls.hero.main})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white', 
      borderRadius: 2,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Overlay para mejor legibilidad */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.3)',
        zIndex: 1
      }} />
      
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ 
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          Oberena Dantza Taldea
        </Typography>
        <Typography variant="h5" sx={{ 
          mb: 3, 
          opacity: 0.95,
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          Iturri zaharretik, indar berriz
        </Typography>
        <Chip 
          label="75 urte" 
          sx={{ 
            fontSize: '1.1rem', 
            py: 2, 
            px: 1,
            background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
            color: 'white',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;