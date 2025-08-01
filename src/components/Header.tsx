import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

type Seccion = 'inicio' | 'grupo' | 'historia' | 'espectaculos' | 'agenda' | 'fotos' | 'contacto';

interface HeaderProps {
  seccionActiva: Seccion;
  menuAbierto: boolean;
  onCambiarSeccion: (seccion: Seccion) => void;
  onToggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  seccionActiva,
  menuAbierto,
  onCambiarSeccion,
  onToggleMenu,
}) => {
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

  const renderNavegacion = () => (
    <>
      {navegacion.map((item) => (
        <Button
          key={item.id}
          color="inherit"
          onClick={() => onCambiarSeccion(item.id)}
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

  return (
    <>
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
              onClick={onToggleMenu}
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
        onClose={onToggleMenu}
      >
        <List sx={{ width: 250 }}>
          {navegacion.map((item) => (
            <ListItem 
              key={item.id} 
              onClick={() => {
                onCambiarSeccion(item.id);
              }}
              sx={{ cursor: 'pointer' }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;