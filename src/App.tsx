import React, { useState } from 'react';
import './App.css';

interface Danza {
  id: number;
  nombre: string;
  procedencia: string;
  urlYoutube: string;
  notas: string;
}

const App: React.FC = () => {
  const [desplegablesAbiertos, setDesplegablesAbiertos] = useState<number[]>([]);

  const danzas: Danza[] = [
    {
      id: 1,
      nombre: "Flamenco",
      procedencia: "Andalucía, España",
      urlYoutube: "https://www.youtube.com/watch?v=ejemplo1",
      notas: "Danza tradicional española caracterizada por su pasión y expresividad. Incluye el cante, el baile y la guitarra."
    },
    {
      id: 2,
      nombre: "Tango",
      procedencia: "Buenos Aires, Argentina",
      urlYoutube: "https://www.youtube.com/watch?v=ejemplo2",
      notas: "Danza de pareja surgida en los barrios porteños. Se caracteriza por movimientos sensuales y melancólicos."
    },
    {
      id: 3,
      nombre: "Samba",
      procedencia: "Brasil",
      urlYoutube: "https://www.youtube.com/watch?v=ejemplo3",
      notas: "Danza brasileña llena de energía y ritmo. Es fundamental en el Carnaval de Río de Janeiro."
    },
    {
      id: 4,
      nombre: "Bharatanatyam",
      procedencia: "Tamil Nadu, India",
      urlYoutube: "https://www.youtube.com/watch?v=ejemplo4",
      notas: "Una de las danzas clásicas más antiguas de la India. Combina expresión facial, gestos de las manos y movimientos precisos."
    }
  ];

  const toggleDesplegable = (id: number) => {
    setDesplegablesAbiertos(prev => 
      prev.includes(id) 
        ? prev.filter(danzaId => danzaId !== id)
        : [...prev, id]
    );
  };

  const estaAbierto = (id: number) => desplegablesAbiertos.includes(id);

  return (
    <div className="app-container">
      <h1>Catálogo de Danzas del Mundo</h1>
      <div className="danzas-lista">
        {danzas.map(danza => (
          <div key={danza.id} className="danza-item">
            <div 
              className="danza-header"
              onClick={() => toggleDesplegable(danza.id)}
            >
              <h3>{danza.nombre}</h3>
              <span className={`flecha ${estaAbierto(danza.id) ? 'abierto' : ''}`}>
                ▼
              </span>
            </div>
            
            {estaAbierto(danza.id) && (
              <div className="danza-contenido">
                <div className="danza-info">
                  <p><strong>Procedencia:</strong> {danza.procedencia}</p>
                  <p><strong>Notas:</strong> {danza.notas}</p>
                  <div className="youtube-link">
                    <strong>Video de referencia:</strong>
                    <a 
                      href={danza.urlYoutube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="youtube-btn"
                    >
                      Ver en YouTube
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;