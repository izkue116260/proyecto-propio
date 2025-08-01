import type { Localidad } from "../models/Localidad";

export const getRepertorio = async () => {
    const repertorio: Localidad[] = [
        // Nuevas ubicaciones de danzas tradicionales vascas
        // NAFARROA
        {
          name: "Betelu",
          coordenadas: [43.024741, -1.980327],
          danzas: ["Betteluaren fandangoa"],
        },
        {
          name: "Lesaka",
          coordenadas: [43.334, -1.667],
          danzas: ["Lesakako ezpata dantza"],
        },
        {
          name: "Estella/Lizarra",
          coordenadas: [42.6702, -2.0280],
          danzas: ["Lizarrako larrain dantza", "Baile de la Era"],
        },
        {
          name: "Tudela",
          coordenadas: [42.0604, -1.6056],
          danzas: ["Tuterako jota", "Tuterako inauterietako polka"],
        },
        {
          name: "Sangüesa/Zangoza",
          coordenadas: [42.5708, -1.2839],
          danzas: ["Zangozako jota"],
        },
        {
          name: "Falces",
          coordenadas: [42.3833, -1.8333],
          danzas: ["Faltzesko zinta dantza"],
        },
        {
          name: "Aoiz/Agoitz",
          coordenadas: [42.7833, -1.35],
          danzas: ["Agoizko txokolatearen jota"],
        },
        {
          name: "Valle del Baztán",
          coordenadas: [43.15, -1.52],
          danzas: ["Baztango irri dantzak", "Baztango sagar dantzak", "Baztango mutil dantzak"],
        },
        {
          name: "Cortes",
          coordenadas: [42.0167, -1.6167],
          danzas: ["Cortesko dancea"],
        },
        {
          name: "Jaurrieta",
          coordenadas: [42.9, -1.1],
          danzas: ["Jaurrietako neska dantza"],
        },
        {
          name: "Arraioz",
          coordenadas: [43.1167, -1.5167],
          danzas: ["Arraiozko maiak"],
        },
        {
          name: "Goizueta",
          coordenadas: [43.1833, -1.8333],
          danzas: ["Goizuetako zahagi dantza"],
        },
        {
          name: "Bera",
          coordenadas: [43.2833, -1.6833],
          danzas: ["Berako makil dantzak eta bordon dantza", "Berako inauteriak"],
        },
        // GIPUZKOA
        {
          name: "Tolosa",
          coordenadas: [43.1333, -2.0667],
          danzas: ["Bordon dantza"],
        },
        {
          name: "Legazpi",
          coordenadas: [43.05, -2.3333],
          danzas: ["Ezpata dantza"],
        },
        {
          name: "Oñate/Oñati",
          coordenadas: [43.0333, -2.4167],
          danzas: ["Corpus Christi dantzak"],
        },
        {
          name: "Berastegi",
          coordenadas: [43.1167, -2.05],
          danzas: ["San Juan Dantzak"],
        },
        {
          name: "Antzuola",
          coordenadas: [43.0833, -2.3833],
          danzas: ["Troquel Dantza", "Sorgin Dantza"],
        },
        {
          name: "Lasarte-Oria",
          coordenadas: [43.2667, -2.0167],
          danzas: ["Sorgin Dantza"],
        },
        {
          name: "Aretxabaleta",
          coordenadas: [43.0667, -2.45],
          danzas: ["Txino Dantza"],
        },
        {
          name: "Deba",
          coordenadas: [43.2983, -2.3519],
          danzas: ["San Roke Dantza"],
        },
    
        // BIZKAIA
        {
          name: "Durango",
          coordenadas: [43.1667, -2.6333],
          danzas: ["Dantzari Dantza", "Vizcayan Sword Dance Suite"],
        },
        {
          name: "Lekeitio",
          coordenadas: [43.3639, -2.5044],
          danzas: ["Kaxarranka", "Andrazkoen aurreskua"],
        },
        {
          name: "Markina-Xemein",
          coordenadas: [43.2667, -2.4833],
          danzas: ["Xemeingo ezpata dantza"],
        },
    
        // ARABA
        {
          name: "Eltziego",
          coordenadas: [42.5167, -2.6333],
          danzas: ["Eltziegoko dantzak"],
        },
    
        // ZUBEROA
        {
          name: "Mauleón/Mauléon",
          coordenadas: [43.2167, -0.8833],
          danzas: ["Maskaradak", "Zuberoako makil dantza"],
        }
      ]; 

    return repertorio;
}