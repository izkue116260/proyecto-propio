import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import HeroSection from './HeroSection';

const InicioSection: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 4 
      }}>
        <Box sx={{ flex: 1 }}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">
                Gure Taldea
              </Typography>
              <Typography variant="body1" paragraph>
                Oberena Dantza Taldea 75 urteko historia duen dantza talde bat da, Iruñean kokatua. 
                Euskal dantzaren tradizioa mantentzen dugu, baina berritzaile izaten ere saiatzen gara.
              </Typography>
              <Typography variant="body1">
                Gure espektakuloak tradizio eta modernitatea uztartzen ditu, 
                publikoari esperientzia berri eta zirraragarria eskaintzeko.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">
                Gure Jarduerak
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                  Euskal dantza tradizionalak
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                  Espektakulu modernoak
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                  Soka-dantzak eta aurkezpenak
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                  Fanfarre musikala
                </Typography>
                <Typography component="li" variant="body1">
                  Dantzari txikien formazioa
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default InicioSection;