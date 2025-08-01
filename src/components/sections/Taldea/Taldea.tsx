import React from 'react';
import {EuskalHerriaMap} from './EuskalHerriaMap';
import styles from './Taldea.module.css';

export const Taldea: React.FC = () => {
  return (
    <>
      <h2 className={styles.subtitulo}>
        Gure taldea
      </h2>
        
        <p className={styles.parrafo}>
          Oberena dantza taldea 100 dantzari eta musikarik baino gehiagok osatzen dute. Dantzariak hainbat taldetan antolaturik daude: Dantzari nagusien taldea 30 kidek osatzen dute, Oberena gaztea taldea 12 neska-mutilek, eta ttiki eta ertainak, 35 dantzari dira. 13 musikariz osatutako fanfarrea ere badu Oberenak, eta 2014an txistu eskola berreskuratu zen, hamar bat ikaslerekin.
        </p>
        <p className={styles.parrafo}>
          2012an dantzari beteranoen taldea sortu zen, taldean urte luzez dantzan aritu diren lagunek osatua. Hilabetean bitan elkartzen dira entsaiatzeko, eta bi jaialditan parte hartzen dute: Gure Dantzak eta abenduaren 3ko Oberenako dantzarien eguna. Talde horretan 23 lagun biltzen dira. Helduendako ikastaroa batik bat dantzarien gurasoez osaturik badago ere, edozeinek parte har dezake. Gaur egun 17 lagunek osatzen dute talde hori.
        </p>

      {/* Mapa de Euskal Herria */}
      <EuskalHerriaMap />
    </>
  );
};
