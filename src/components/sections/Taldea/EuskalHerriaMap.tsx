import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Typography } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { getRepertorio } from '../../../domain/services/getRepertorio';
import type { Localidad } from '../../../domain/models/Localidad';
import styles from '../../../general.module.css';

const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background: linear-gradient(135deg, #d32f2f 0%, #1b5e20 100%);
        width: 25px;
        height: 25px;
        border-radius: 50% 50% 50% 0;
        border: 3px solid white;
        transform: rotate(-45deg);
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -5],
  });
};


// Centro del mapa (aproximadamente en el centro de Navarra)
const mapCenter: [number, number] = [42.7, -1.5];

export const EuskalHerriaMap: React.FC = () => {
  const [locations, setLocations] = useState<Localidad[]>([]);

  useEffect(() => {
    const onLoad = async () => {
      setLocations(await getRepertorio());
    }

    onLoad();
  }, []);

  return (
    <>
      <h2 className={styles.subtitulo}>
        Errepertorioa
      </h2>
      
      <Box sx={{ 
        height: '400px', 
        borderRadius: 2, 
        overflow: 'visible', // Cambiado de 'hidden' a 'visible' para que los popups no se corten
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        position: 'relative', // Añadido para el posicionamiento de popups
        '& .leaflet-container': {
          height: '100%',
          borderRadius: 'inherit'
        },
        '& .custom-marker': {
          background: 'none !important',
          border: 'none !important'
        },
        '& .leaflet-popup': {
          zIndex: 1000, // Asegurar que los popups estén en primer plano
        },
        '& .leaflet-popup-content-wrapper': {
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }
      }}>
        <MapContainer
          center={mapCenter}
          zoom={9}
          minZoom={8}
          maxZoom={12}
          maxBounds={[
            [42.0, -3.5], // Suroeste (límite sur y oeste de Euskal Herria)
            [43.6, -0.5]  // Noreste (límite norte y este de Euskal Herria)
          ]}
          maxBoundsViscosity={1.0}
          closePopupOnClick={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.coordenadas}
              icon={createCustomIcon()}
            >
              <Popup 
              autoPan={true}
              autoPanPadding={[10, 10]}
              keepInView={true}
              closeOnEscapeKey={true}
              autoClose={true}
              closeOnClick={false}
              maxWidth={300}
              minWidth={250}
            >
                <Box sx={{ textAlign: 'left', p: 1, minWidth: '250px', maxWidth: '280px' }}>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {location.name}
                  </Typography>
                  {location.danzas && location.danzas.length > 0 && (
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#1b5e20', mb: 0.5 }}>
                        Danzas tradicionales:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {location.danzas.map((danza, index) => (
                          <Typography 
                            key={index} 
                            component="li" 
                            variant="body2" 
                            sx={{ 
                              fontSize: '0.85rem',
                              lineHeight: 1.3,
                              mb: 0.3,
                              wordWrap: 'break-word'
                            }}
                          >
                            {danza}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Box>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </>
  );
};

