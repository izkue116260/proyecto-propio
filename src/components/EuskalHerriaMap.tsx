import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Typography } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para los iconos de Leaflet en React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Icono personalizado en colores vascos
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
    popupAnchor: [0, -25],
  });
};

const EuskalHerriaMap: React.FC = () => {
  // Coordenadas de los puntos
  const locations = [
    {
      name: "Pamplona",
      coordinates: [42.8167, -1.6432] as [number, number],
    },
    {
      name: "El Ciego", 
      coordinates: [42.5167, -2.05] as [number, number],
    },
    {
      name: "Ochagavía",
      coordinates: [42.9833, -1.05] as [number, number],
    }
  ];

  // Centro del mapa (aproximadamente en el centro de Navarra)
  const mapCenter: [number, number] = [42.7, -1.5];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom color="primary" sx={{ textAlign: 'center', mb: 3 }}>
        Gure Lekuak Euskal Herrian
      </Typography>
      
      <Box sx={{ 
        height: '400px', 
        borderRadius: 2, 
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        '& .leaflet-container': {
          height: '100%',
          borderRadius: 'inherit'
        },
        '& .custom-marker': {
          background: 'none !important',
          border: 'none !important'
        }
      }}>
        <MapContainer
          center={mapCenter}
          zoom={9}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.coordinates}
              icon={createCustomIcon()}
            >
              <Popup>
                <Box sx={{ textAlign: 'center', p: 1 }}>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                    {location.name}
                  </Typography>
                </Box>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
      
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, opacity: 0.7 }}>
        Gure taldearen presentzia Euskal Herrian
      </Typography>
    </Box>
  );
};

export default EuskalHerriaMap;