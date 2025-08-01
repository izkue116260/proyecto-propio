import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const ContactoSection: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom color="primary">
        Kontaktua
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 4 
      }}>
        <Box sx={{ flex: 1 }}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Harremanetan jarri
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="body1">
                  oberenadt@oberenadantzataldea.eus
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="body1">
                  664 693 755
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="body1">
                  Sebastian Albero 1, 31006 Iruñea, Nafarroa
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Kontratatzea
              </Typography>
              <Typography variant="body1" paragraph>
                Zure ekitaldirako gure taldea kontratatu nahi baduzu, 
                jarri gurekin harremanetan.
              </Typography>
              <Typography variant="body1">
                Eskaintzen ditugun zerbitzuak:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                  Euskal dantza espektakuluak
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                  Soka-dantzak
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                  Fanfarre musikala
                </Typography>
                <Typography component="li" variant="body1">
                  Pertsonalizatutako emanaldiak
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactoSection;