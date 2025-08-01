import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Chip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import './App.css';

type Seccion = 'inicio' | 'grupo' | 'historia' | 'espectaculos' | 'agenda' | 'fotos' | 'contacto';

const App: React.FC = () => {
  const [seccionActiva, setSeccionActiva] = useState<Seccion>('inicio');
  const [menuAbierto, setMenuAbierto] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navegacion = [
    { id: 'inicio' as Seccion, label: 'Hasiera' },
    { id: 'grupo' as Seccion, label: 'Taldea' },
    { id: 'historia' as Seccion, label: 'Historia' },
    { id: 'espectaculos' as Seccion, label: 'Emanaldiak' },
    { id: 'agenda' as Seccion, label: 'Agenda' },
    { id: 'fotos' as Seccion, label: 'Argazkiak' },
    { id: 'contacto' as Seccion, label: 'Kontaktua' },
  ];

  const espectaculos = [
    {
      titulo: "Oroitzapen hutsak",
      año: "2024",
      descripcion: "Nuestro último espectáculo que combina tradición y modernidad."
    },
    {
      titulo: "Dantzarien plaza",
      año: "2023",
      descripcion: "Un homenaje a las danzas tradicionales navarras."
    },
    {
      titulo: "Lizarren Doinua",
      año: "2022",
      descripcion: "Espectáculo que celebra la música y danza de nuestra tierra."
    }
  ];

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const cambiarSeccion = (seccion: Seccion) => {
    setSeccionActiva(seccion);
    setMenuAbierto(false);
  };

  const renderNavegacion = () => (
    <>
      {navegacion.map((item) => (
        <Button
          key={item.id}
          color="inherit"
          onClick={() => cambiarSeccion(item.id)}
          sx={{
            mx: 1,
            backgroundColor: seccionActiva === item.id ? 'rgba(255,255,255,0.1)' : 'transparent',
          }}
        >
          {item.label}
        </Button>
      ))}
    </>
  );

  const renderContenido = () => {
    switch (seccionActiva) {
      case 'inicio':
        return (
          <Box>
            <Box sx={{ 
              textAlign: 'center', 
              mb: 6, 
              py: 8, 
              background: 'linear-gradient(135deg, #d32f2f 0%, #1b5e20 100%)', 
              color: 'white', 
              borderRadius: 2 
            }}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Oberena Dantza Taldea
              </Typography>
              <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
                Iturri zaharretik, indar berriz
              </Typography>
              <Chip 
                label="75 urte" 
                color="secondary" 
                sx={{ fontSize: '1.1rem', py: 2, px: 1 }}
              />
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              gap: 4 
            }}>
              <Box sx={{ flex: 1 }}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      Gure Taldea
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Oberena Dantza Taldea 75 urteko historia duen dantza talde bat da, Iruñean kokatua. 
                      Euskal dantzaren tradizioa mantentzen dugu, baina berritzaile izaten ere saiatzen gara.
                    </Typography>
                    <Typography variant="body1">
                      Gure espektakuloak tradizio eta modernitatea uztartzen ditu, 
                      publikoari esperientzia berri eta zirraragarria eskaintzeko.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      Gure Jarduerak
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Euskal dantza tradizionalak
                      </Typography>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Espektakulu modernoak
                      </Typography>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Soka-dantzak eta aurkezpenak
                      </Typography>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Fanfarre musikala
                      </Typography>
                      <Typography component="li" variant="body1">
                        Dantzari txikien formazioa
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
        );

      case 'grupo':
        return (
          <Box>
            <Typography variant="h3" gutterBottom color="primary">
              Gure Taldea
            </Typography>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="body1" paragraph>
                  Oberena Dantza Taldea Iruñeko dantza talde historiko bat da, 
                  75 urteko ibilbidea duena. Gure helburua euskal dantza eta 
                  kultura zabaltzea da, tradizio eta berrikuntza uztartuz.
                </Typography>
                <Typography variant="body1" paragraph>
                  Gure taldea osatzen dute:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Dantzariak:</strong> Euskal dantza tradizionaletan aditua den taldea
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Fanfarre:</strong> Musikariek osatutako fanfarre taldea
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Dantzari Txikiak:</strong> Etorkizuneko belaunaldiak prestatzeko tailerra
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        );

      case 'historia':
        return (
          <Box>
            <Typography variant="h3" gutterBottom color="primary">
              75 Urteko Historia
            </Typography>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="body1" paragraph>
                  1949an sortu zen Oberena Dantza Taldea, ordutik Nafarroako dantza 
                  talderik garrantzitsuenetako bat bilakatu delarik.
                </Typography>
                <Typography variant="body1" paragraph>
                  Gure ibilbidean zehar, euskal dantzaren tradizioa mantendu eta 
                  zabaldu dugu, baina aldi berean berritzaile izan gara, espektakulu 
                  modernoak sortuz eta gaur egungo publikoarengana iristeko.
                </Typography>
                <Typography variant="body1">
                  Gaur egun, 75. urteurrena ospatzen ari gara, eta etorkizunari 
                  begira jarraitzen dugu, kultura eta tradizioa belaunaldi 
                  berriei transmititzeko konpromisoarekin.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );

      case 'espectaculos':
        return (
          <Box>
            <Typography variant="h3" gutterBottom color="primary">
              Gure Emanaldiak
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              gap: 3 
            }}>
              {espectaculos.map((espectaculo, index) => (
                <Box key={index} sx={{ flex: 1 }}>
                  <Card elevation={3} sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="secondary">
                        {espectaculo.titulo}
                      </Typography>
                      <Chip label={espectaculo.año} color="primary" size="small" sx={{ mb: 2 }} />
                      <Typography variant="body1">
                        {espectaculo.descripcion}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        );

      case 'agenda':
        return (
          <Box>
            <Typography variant="h3" gutterBottom color="primary">
              Agenda
            </Typography>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="body1" paragraph>
                  Hemen aurkituko dituzu gure hurrengo emanaldiak eta jarduerak.
                </Typography>
                <Typography variant="body1">
                  Informazio eguneratua gure sare sozialetan eta kontaktu bidez.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );

      case 'fotos':
        return (
          <Box>
            <Typography variant="h3" gutterBottom color="primary">
              Argazkiak eta Bideoak
            </Typography>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="body1" paragraph>
                  Gure emanaldien argazki eta bideoak hemen aurkituko dituzu.
                </Typography>
                <Typography variant="body1">
                  Laster galeria berria argitaratuko dugu!
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );

      case 'contacto':
        return (
          <Box>
            <Typography variant="h3" gutterBottom color="primary">
              Kontaktua
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              gap: 4 
            }}>
              <Box sx={{ flex: 1 }}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Harremanetan jarri
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Email sx={{ mr: 2, color: 'primary.main' }} />
                      <Typography variant="body1">
                        oberenadt@oberenadantzataldea.eus
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Phone sx={{ mr: 2, color: 'primary.main' }} />
                      <Typography variant="body1">
                        664 693 755
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                      <Typography variant="body1">
                        Sebastian Albero 1, 31006 Iruñea, Nafarroa
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Kontratatzea
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Zure ekitaldirako gure taldea kontratatu nahi baduzu, 
                      jarri gurekin harremanetan.
                    </Typography>
                    <Typography variant="body1">
                      Eskaintzen ditugun zerbitzuak:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Euskal dantza espektakuluak
                      </Typography>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Soka-dantzak
                      </Typography>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Fanfarre musikala
                      </Typography>
                      <Typography component="li" variant="body1">
                        Pertsonalizatutako emanaldiak
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #d32f2f 0%, #c62828 100%)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Oberena Dantza Taldea
          </Typography>
          
          {isMobile ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex' }}>
              {renderNavegacion()}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={menuAbierto}
        onClose={toggleMenu}
      >
        <List sx={{ width: 250 }}>
          {navegacion.map((item) => (
            <ListItem 
              key={item.id} 
              onClick={() => cambiarSeccion(item.id)}
              sx={{ cursor: 'pointer' }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {renderContenido()}
      </Container>

      <Box 
        component="footer" 
        sx={{ 
          background: 'linear-gradient(135deg, #d32f2f 0%, #1b5e20 100%)', 
          color: 'white', 
          py: 3, 
          mt: 6 
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © 2024 Oberena Dantza Taldea - Iturri zaharretik, indar berriz
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default App;