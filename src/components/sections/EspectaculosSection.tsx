import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import { imageUrls } from '../../data/imageUrls';

const EspectaculosSection: React.FC = () => {
  const espectaculos = [
    {
      titulo: "Oroitzapen hutsak",
      año: "2024",
      descripcion: "Gure azken espektakulua, tradizio eta modernitatea uztartzen dituena.",
      imagen: imageUrls.spectacles.oroitzapenHutsak.url,
      alt: imageUrls.spectacles.oroitzapenHutsak.alt
    },
    {
      titulo: "Dantzarien plaza",
      año: "2023",
      descripcion: "Nafarroako dantza tradizionalei omenaldia, gure erroetara itzulia.",
      imagen: imageUrls.spectacles.dantzarienPlaza.url,
      alt: imageUrls.spectacles.dantzarienPlaza.alt
    },
    {
      titulo: "Lizarren Doinua",
      año: "2022",
      descripcion: "Gure lurraren musika eta dantzaren ospakizuna, natura eta kulturaren arteko lotura.",
      imagen: imageUrls.spectacles.lizarrenDoinua.url,
      alt: imageUrls.spectacles.lizarrenDoinua.alt
    }
  ];

  return (
    <Box>
      <Typography variant="h3" gutterBottom color="primary">
        Gure Emanaldiak
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Oberena Dantza Taldearen espektakulu nagusiak, non tradizio eta berrikuntza elkartzen diren.
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 3 
      }}>
        {espectaculos.map((espectaculo, index) => (
          <Box key={index} sx={{ flex: 1 }}>
            <Card 
              elevation={3} 
              sx={{ 
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 25px rgba(211, 47, 47, 0.15)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={espectaculo.imagen}
                alt={espectaculo.alt}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom color="secondary">
                  {espectaculo.titulo}
                </Typography>
                <Chip 
                  label={espectaculo.año} 
                  color="primary" 
                  size="small" 
                  sx={{ mb: 2 }} 
                />
                <Typography variant="body1">
                  {espectaculo.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 4, p: 3, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary">
          💡 Kontratazio informazioa
        </Typography>
        <Typography variant="body2">
          Zure ekitaldirako gure espektakulu hauetako bat kontratatu nahi baduzu, 
          jarri gurekin harremanetan <strong>oberenadt@oberenadantzataldea.eus</strong> 
          helbidean edo <strong>664 693 755</strong> telefonoan.
        </Typography>
      </Box>
    </Box>
  );
};

export default EspectaculosSection;