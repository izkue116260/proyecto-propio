# 🖼️ Instrucciones para Usar Imágenes Reales - Oberena Dantza Taldea

## 🎉 **¡ÁLBUM OFICIAL ENCONTRADO!**

**Descubrimos el tesoro**: Oberena Dantza Taldea tiene un álbum oficial en Flickr con **6,772 fotos reales**:

📸 **[Ver álbum completo en Flickr →](https://www.flickr.com/photos/oberenadt/albums/with/72157675221351525)**

## 🚀 **Estado actual de tu web:**

La web ya funciona con **imágenes de alta calidad de danza vasca** como placeholders. Son apropiadas y profesionales, pero ahora puedes usar las **fotos reales de Oberena**.

## 📂 **Estructura Actual**

```
src/
├── data/
│   └── imageUrls.ts          # ← Aquí están todas las URLs de imágenes
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx   # Usa imagen de fondo
│   │   ├── EspectaculosSection.tsx  # Usa imágenes de espectáculos  
│   │   └── FotosSection.tsx  # Galería completa
public/
└── images/                   # ← Para imágenes locales futuras
```

## 🔄 **Cómo Usar las Imágenes Reales de Oberena**

### **Método Recomendado: Álbum de Flickr (¡6,772 fotos!)**

1. **Accede al álbum oficial**:
   ```
   https://www.flickr.com/photos/oberenadt/albums/with/72157675221351525
   ```

2. **Explora las categorías disponibles**:
   - 📸 Espectáculos ("Oroitzapen hutsak", "Dantzarien plaza", etc.)
   - 🎭 Sanferminetan y fiestas populares
   - 👥 Fotos de grupo y ensayos
   - 🎵 Fanfarre y músicos
   - 👶 Dantzari txikiak
   - 🏆 75º aniversario y celebraciones

3. **Obtener URLs directas**:
   - Haz clic en cualquier foto del álbum
   - Clic derecho → "Abrir imagen en nueva pestaña"
   - Copia la URL que aparece (algo como: `live.staticflickr.com/...`)

### **Opción Alternativa: URLs Externas**
Si ya tienes las URLs de las imágenes de Oberena:

1. **Editar `src/data/imageUrls.ts`**:
```typescript
export const imageUrls = {
  hero: {
    // Cambiar esta URL por una foto de grupo de Oberena
    main: "URL_DE_TU_IMAGEN_HERO",
    alt: "Oberena Dantza Taldea"
  },
  spectacles: {
    oroitzapenHutsak: {
      // URL de fotos reales del espectáculo
      url: "URL_OROITZAPEN_HUTSAK",
      alt: "Oroitzapen hutsak espektakulua"
    },
    // ... etc
  }
};
```

### **Opción 2: Imágenes Locales (Recomendado)**
Para mejor rendimiento:

1. **Subir imágenes a `public/images/`**:
```
public/images/
├── hero-oberena.jpg
├── espectaculos/
│   ├── oroitzapen-hutsak.jpg
│   ├── dantzarien-plaza.jpg
│   └── lizarren-doinua.jpg
└── galeria/
    ├── soka-dantza.jpg
    ├── fanfarre.jpg
    └── dantzari-txikiak.jpg
```

2. **Actualizar `imageUrls.ts`**:
```typescript
export const imageUrls = {
  hero: {
    main: "/images/hero-oberena.jpg",
    alt: "Oberena Dantza Taldea"
  },
  spectacles: {
    oroitzapenHutsak: {
      url: "/images/espectaculos/oroitzapen-hutsak.jpg",
      alt: "Oroitzapen hutsak espektakulua"
    },
    // ... etc
  }
};
```

## 📸 **Imágenes Específicas Necesarias**

### **Hero Section** (1920x800px)
- **Nombre:** `hero-oberena.jpg`
- **Descripción:** Foto panorámica del grupo completo
- **Uso:** Fondo de la sección principal

### **Espectáculos** (400x300px cada una)
- **`oroitzapen-hutsak.jpg`** - Escena del espectáculo 2024
- **`dantzarien-plaza.jpg`** - Danza tradicional navarra  
- **`lizarren-doinua.jpg`** - Momentos musicales

### **Galería** (400x300px cada una)
- **`soka-dantza.jpg`** - Participación en fiestas
- **`fanfarre.jpg`** - Músicos del grupo
- **`dantzari-txikiak.jpg`** - Niños aprendiendo
- **`talde-ofiziala.jpg`** - Foto oficial del grupo
- **`75-urteurrena.jpg`** - Celebración aniversario

## ⚡ **Optimización de Imágenes**

### **Tamaños Recomendados:**
- **Hero:** 1920x800px (máx 500KB)
- **Espectáculos:** 400x300px (máx 100KB)
- **Galería:** 400x300px (máx 100KB)

### **Formatos:**
- **Preferido:** WebP (mejor compresión)
- **Alternativa:** JPG (máxima compatibilidad)
- **Evitar:** PNG (demasiado grande para fotos)

### **Herramientas de Optimización:**
- **Online:** TinyPNG, Squoosh.app
- **Software:** ImageOptim, GIMP

## 🛠️ **Comando para Probar Cambios**

```bash
# Después de cambiar imágenes
npm run dev
```

La web se actualizará automáticamente y verás los cambios.

## 🎨 **Personalización Avanzada**

### **Cambiar Efectos de Hover:**
En `EspectaculosSection.tsx` y `FotosSection.tsx`:
```typescript
'&:hover': {
  transform: 'translateY(-5px)',
  boxShadow: '0 8px 25px rgba(211, 47, 47, 0.15)'
}
```

### **Ajustar Overlay del Hero:**
En `HeroSection.tsx`:
```typescript
background: `linear-gradient(rgba(211, 47, 47, 0.7), rgba(27, 94, 32, 0.7)), url(${imageUrls.hero.main})`
```

## ✅ **Checklist de Reemplazo**

- [ ] Obtener imágenes de alta calidad de Oberena
- [ ] Optimizar tamaños y formatos  
- [ ] Subir a `public/images/` o servidor
- [ ] Actualizar `src/data/imageUrls.ts`
- [ ] Probar en navegador (`npm run dev`)
- [ ] Verificar en móvil y desktop
- [ ] Comprobar textos alt para accesibilidad

## 🆘 **Solución de Problemas**

### **Imagen no se muestra:**
- Verificar ruta en `imageUrls.ts`
- Comprobar que el archivo existe
- Revisar permisos de la carpeta

### **Imagen se ve borrosa:**
- Usar imágenes de mayor resolución
- Verificar que `objectFit: 'cover'` esté aplicado

### **Carga lenta:**
- Optimizar tamaño de archivo
- Considerar usar WebP
- Implementar lazy loading (futuro)

---

**🎯 Resultado:** Una web visualmente impactante que representa perfectamente a Oberena Dantza Taldea con sus propias imágenes.