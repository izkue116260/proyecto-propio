import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { imageUrls } from '../../data/imageUrls';

const FotosSection: React.FC = () => {
  const galleryImages = [
    {
      url: imageUrls.spectacles.oroitzapenHutsak.url,
      title: 'Oroitzapen hutsak',
      subtitle: 'Gure azken espektakulua (2024)',
      alt: imageUrls.spectacles.oroitzapenHutsak.alt
    },
    {
      url: imageUrls.spectacles.dantzarienPlaza.url,
      title: 'Dantzarien plaza',
      subtitle: 'Euskal dantza tradizionalaren omenaldia (2023)',
      alt: imageUrls.spectacles.dantzarienPlaza.alt
    },
    {
      url: imageUrls.spectacles.lizarrenDoinua.url,
      title: 'Lizarren Doinua',
      subtitle: 'Gure lurraren musika eta dantza (2022)',
      alt: imageUrls.spectacles.lizarrenDoinua.alt
    },
    {
      url: imageUrls.activities.sokaDantza.url,
      title: 'Soka-dantzak',
      subtitle: 'Herriko jaietan parte hartzen',
      alt: imageUrls.activities.sokaDantza.alt
    },
    {
      url: imageUrls.activities.fanfarre.url,
      title: 'Fanfarre musikala',
      subtitle: 'Gure musikari taldea',
      alt: imageUrls.activities.fanfarre.alt
    },
    {
      url: imageUrls.activities.dantzariTxikiak.url,
      title: 'Dantzari Txikiak',
      subtitle: 'Etorkizuneko belaunaldiak',
      alt: imageUrls.activities.dantzariTxikiak.alt
    },
    {
      url: imageUrls.activities.taldeArgazkia.url,
      title: 'Gure Taldea',
      subtitle: 'Oberena Dantza Taldea osoa',
      alt: imageUrls.activities.taldeArgazkia.alt
    },
    {
      url: imageUrls.activities.urteurrena.url,
      title: '75. Urteurrena',
      subtitle: 'Gure historian zehar',
      alt: imageUrls.activities.urteurrena.alt
    }
  ];

  return (
    <Box>
      <Typography variant="h3" gutterBottom color="primary">
        Argazkiak eta Bideoak
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Gure emanaldien eta jardueraren argazki eta bideoak. 
        Oberena Dantza Taldearen 75 urteko ibilbidearen lekukotasuna.
      </Typography>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
        gap: 3,
        mb: 4
      }}>
        {galleryImages.map((image, index) => (
          <Card 
            key={index} 
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
              image={image.url}
              alt={image.alt}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: '1rem' }}>
                {image.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                {image.subtitle}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Referencia al álbum oficial de Flickr */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: '#e8f5e8', borderRadius: 2, border: '2px solid #4caf50' }}>
        <Typography variant="h6" gutterBottom color="primary">
          📸 Álbum Oficial de Oberena Dantza Taldea
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>¡Encontramos el tesoro!</strong> Oberena tiene un álbum oficial en Flickr con <strong>6,772 fotos reales</strong> del grupo:
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <a 
            href={imageUrls.flickrReference.albumUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#1976d2', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            👉 Ver álbum completo en Flickr →
          </a>
        </Typography>
        <Typography variant="body2" component="ul" sx={{ pl: 2, fontSize: '0.9rem' }}>
          <li><strong>75 años de historia</strong> - Fotos desde 1949 hasta 2024</li>
          <li><strong>Espectáculos</strong> - "Oroitzapen hutsak", "Dantzarien plaza", "Lizarren Doinua"</li>
          <li><strong>Sanferminetan</strong> - Soka-dantzak eta parte-hartzeak</li>
          <li><strong>Taldeko momentuak</strong> - Entseguak, emanaldiak, ospakizunak</li>
          <li><strong>Fanfarre</strong> - Gure musikari taldearen argazkiak</li>
        </Typography>
      </Box>

      {/* Instrucciones técnicas */}
      <Box sx={{ mt: 3, p: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="secondary">
          🔧 Para desarrolladores - Cómo usar las fotos reales:
        </Typography>
        <Typography variant="body2" component="ol" sx={{ pl: 2 }}>
          <li>Visita el álbum de Flickr de Oberena</li>
          <li>Haz clic derecho en las fotos → "Abrir imagen en nueva pestaña"</li>
          <li>Copia las URLs directas de las imágenes</li>
          <li>Actualiza <code>src/data/imageUrls.ts</code> con las URLs reales</li>
          <li>¡La web se actualizará automáticamente con las fotos auténticas!</li>
        </Typography>
      </Box>
    </Box>
  );
};

export default FotosSection;