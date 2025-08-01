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
      
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, opacity: 0.7 }}>
        Euskal dantza tradizionalak eta haien jatorria
      </Typography>

      {/* Danzas cuyo origen no se ha podido determinar */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: '#fff3e0', borderRadius: 2, border: '2px solid #ff9800' }}>
        <Typography variant="h6" gutterBottom color="secondary" sx={{ fontWeight: 'bold' }}>
          🤔 Dantzen jatorria argitu gabe (Research needed):
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
          Ondorengo dantza hauek ez dugu lortu haien jatorri geografiko zehatza aurkitzen:
        </Typography>
        
        <Box sx={{ pl: 2 }}>
          <Typography variant="body2" component="div" sx={{ mb: 1 }}>
            <strong>Nafarroa:</strong> Imozko eskudantza, desmayo, la balsa, Baxenafarroko inauteriak, dantza-luze, jauziak, Pilindros jota, Olagueko esku dantza, Arrarasko zozo dantza, Kauteroen dantzak, Lantzeko inauteriak, Monteagudoko dancea, ballestas, Urdiaingo kantaita, Aurizko prioreen dantza, Aurizko ingurutxoa, Alkozko ingurutxoa, Izabako ttunttuna, Arrosadiko ttunttuna, Txantreako ttunttuna, Leitzako ingurutxoa, Orbaizetako joko dantza, Azpilagañako ezpata dantza, Arrosadiko soka-dantza.
          </Typography>
          
          <Typography variant="body2" component="div" sx={{ mb: 1 }}>
            <strong>Zuberoa:</strong> Maskaradak (gehigarri gehiago behar dira)
          </Typography>
          
          <Typography variant="body2" component="div" sx={{ mb: 1 }}>
            <strong>Lapurdi:</strong> Lapurdiko inauteriak, zapatagin dantza, Betteluren fandangoa
          </Typography>
          
          <Typography variant="body2" component="div" sx={{ mb: 1 }}>
            <strong>Araba:</strong> Biasteriko jota, txulalai
          </Typography>
          
          <Typography variant="body2" component="div" sx={{ mb: 1 }}>
            <strong>Gipuzkoa:</strong> Zinta dantza, igitai dantza, batelerak, matelota, arku dantza, brokel dantza, boastitzea, uztai dantza, makil handiena, makil txikiena, jorrai dantza, fandango eta arin-arin, aurreskua, ezpata dantza, sorgin dantza, San Juango zortzikoa, soka dantza
          </Typography>
          
          <Typography variant="body2" component="div" sx={{ mb: 1 }}>
            <strong>Bizkaia:</strong> kaxarranka, mahaigainekoa, dantzari-dantza, gorularien arku dantza eta domingillo, aurreskua
          </Typography>
          
          <Typography variant="body2" component="div" sx={{ mb: 1 }}>
            <strong>Beste koreografiak:</strong> Amaia ezpata dantza, Debako martxa, orpo-punta polka, polka berria, ipurdi dantza, irradaka, Kintoan barna makil dantza, Mesias Sarritan, Hator-hator, scotish, mazurka, habanera
          </Typography>
        </Box>
        
        <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', color: '#e65100' }}>
          💡 Laguntza behar dugu dantza hauen jatorri geografikoa zehazteko! Badakizu haietako batuen jatorria? Jarri harremanetan gurekin.
        </Typography>
      </Box>
    </>
  );
};

