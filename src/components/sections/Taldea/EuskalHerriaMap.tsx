import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { getRepertorio } from '../../../domain/services/getRepertorio';
import type { Localidad } from '../../../domain/models/Localidad';
import styles from '../../../general.module.css';
import stylesMap from './EuskalHerriaMap.module.css';

const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background: linear-gradient(135deg, #1b5e20 100%);
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


// Componente para capturar la referencia del mapa
const MapInstanceCapture: React.FC<{ mapRef: React.MutableRefObject<L.Map | null> }> = ({ mapRef }) => {
  const map = useMap();
  
  useEffect(() => {
    mapRef.current = map;
  }, [map, mapRef]);

  return null;
};

// Centro del mapa (aproximadamente en el centro de Navarra)
const mapCenter: [number, number] = [42.7, -1.5];

export const EuskalHerriaMap: React.FC = () => {
  const [locations, setLocations] = useState<Localidad[]>([]);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const onLoad = async () => {
      setLocations(await getRepertorio());
    }

    onLoad();
  }, []);

  // Event listener global para cerrar popups al hacer clic fuera del mapa
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      if (mapContainerRef.current && mapInstanceRef.current) {
        // Si el clic no es dentro del contenedor del mapa, cerrar popups
        if (!mapContainerRef.current.contains(event.target as Node)) {
          mapInstanceRef.current.closePopup();
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, true);

    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);


  if(locations.length === 0) {
    return <div>Cargando...</div>;
  }
  
  return (
    <>
      <h2 className={styles.subtitulo}>
        Errepertorioa
      </h2>
      
      <div className={stylesMap.mapa} ref={mapContainerRef}>
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
          closePopupOnClick={true}
          style={{ height: '100%', width: '100%' }}
        >
          <MapInstanceCapture mapRef={mapInstanceRef} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={[location.coordenadaX, location.coordenadaY]}
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
                <h3 className={stylesMap.localidad}>
                  {location.name}
                </h3>
                <ul className={stylesMap.listado}>
                  {location.bailes.map((dantza, index) => (
                    <li key={index}>
                      {dantza}
                    </li>
                  ))}
                </ul>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

