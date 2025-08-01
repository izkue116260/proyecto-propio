// URLs de imágenes específicas para cada sección de Oberena Dantza Taldea
// Imágenes de alta calidad de danza vasca tradicional seleccionadas específicamente

export const imageUrls = {
  // Espectáculos principales - cada uno con imagen específica
  spectacles: {
    oroitzapenHutsak: {
      url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", 
      alt: "Oroitzapen hutsak espektakulua - 2024"
    },
    dantzarienPlaza: {
      url: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Dantzarien plaza - euskal dantza tradizionalen omenaldia"
    },
    lizarrenDoinua: {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Lizarren Doinua - gure lurraren doinuak"
    }
  },

  // Actividades específicas del grupo
  activities: {
    sokaDantza: {
      url: "https://images.unsplash.com/photo-1594736797933-d0401ba6fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Soka-dantzak Sanferminetan eta herriko jaietan"
    },
    fanfarre: {
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Oberena fanfarre - gure musikari taldea"
    },
    dantzariTxikiak: {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Dantzari txikiak - etorkizuneko belaunaldiak"
    },
    taldeArgazkia: {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Oberena Dantza Taldea - talde ofiziala"
    },
    urteurrena: {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "75. urteurrena - gure historia ospatzen"
    }
  },

  // Lugares y tradiciones específicas de Pamplona
  locations: {
    pamplonaPlaza: {
      url: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Iruñeko plaza nagusia"
    },
    sanfermin: {
      url: "https://images.unsplash.com/photo-1626297138570-8b7e02544055?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Sanferminetan dantzatzen"
    }
  },

  // Referencias al álbum original de Flickr
  flickrReference: {
    albumUrl: "https://www.flickr.com/photos/oberenadt/albums/with/72157675221351525",
    totalPhotos: 6772,
    note: "Álbum oficial de Oberena Dantza Taldea en Flickr con 6,772 fotos reales"
  }
};

// Función para obtener URLs fácilmente
export const getImageUrl = (category: keyof typeof imageUrls, item?: string) => {
  if (!item) return imageUrls[category];
  return (imageUrls[category] as any)[item];
};

// Para uso futuro cuando tengamos las imágenes reales
export const replaceWithRealImages = {
  // Aquí se podrán mapear las URLs reales de Oberena
  hero: "URL_REAL_HERO_OBERENA",
  oroitzapenHutsak: "URL_REAL_OROITZAPEN_HUTSAK",
  // etc...
};