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
  Fade,
  Slide,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

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
      {navegacion.map((item, index) => (
        <Fade in={true} timeout={300 + index * 100} key={item.id}>
          <Button
            color="inherit"
            onClick={() => onCambiarSeccion(item.id)}
            sx={{
              mx: 0.5,
              px: 2.5,
              py: 1,
              borderRadius: 3,
              position: 'relative',
              fontWeight: 600,
              fontSize: '0.95rem',
              textTransform: 'none',
              letterSpacing: '0.5px',
              overflow: 'hidden',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backgroundColor: seccionActiva === item.id 
                ? 'rgba(255, 255, 255, 0.25)' 
                : 'transparent',
              backdropFilter: seccionActiva === item.id ? 'blur(10px)' : 'none',
              border: seccionActiva === item.id 
                ? '1px solid rgba(255, 255, 255, 0.3)' 
                : '1px solid transparent',
              boxShadow: seccionActiva === item.id 
                ? '0 8px 32px rgba(0, 0, 0, 0.12)' 
                : 'none',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              },
              '&:active': {
                transform: 'translateY(0px)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                transition: 'left 0.6s ease',
              },
              '&:hover::before': {
                left: '100%',
              },
            }}
          >
            {item.label}
          </Button>
        </Fade>
      ))}
    </>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.95) 0%, rgba(198, 40, 40, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700,
              fontSize: '1.4rem',
              letterSpacing: '0.5px',
              background: 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Oberena Dantza Taldea
          </Typography>
          
          {isMobile ? (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={onToggleMenu}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s ease',
                backgroundColor: menuAbierto ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              {menuAbierto ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {renderNavegacion()}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={menuAbierto}
        onClose={onToggleMenu}
        PaperProps={{
          sx: {
            width: 320,
            background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.95) 0%, rgba(198, 40, 40, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 50px rgba(0, 0, 0, 0.3)',
          }
        }}
        SlideProps={{
          direction: 'left'
        }}
      >
        <Box sx={{ 
          pt: 4, 
          pb: 2, 
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
        }}>
          <Typography 
            variant="h5" 
            sx={{ 
              textAlign: 'center', 
              color: 'white', 
              fontWeight: 700,
              letterSpacing: '1px',
              mb: 3
            }}
          >
            Menú
          </Typography>
        </Box>
        
        <List sx={{ px: 2 }}>
          {navegacion.map((item, index) => (
            <Slide 
              key={item.id}
              direction="left" 
              in={menuAbierto} 
              timeout={300 + index * 100}
              mountOnEnter 
              unmountOnExit
            >
              <ListItem 
                onClick={() => {
                  onCambiarSeccion(item.id);
                  onToggleMenu();
                }}
                sx={{ 
                  cursor: 'pointer',
                  borderRadius: 3,
                  mb: 1,
                  mx: 1,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: seccionActiva === item.id 
                    ? 'rgba(255, 255, 255, 0.25)' 
                    : 'transparent',
                  backdropFilter: seccionActiva === item.id ? 'blur(10px)' : 'none',
                  border: seccionActiva === item.id 
                    ? '1px solid rgba(255, 255, 255, 0.3)' 
                    : '1px solid transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    transform: 'translateX(-8px)',
                    boxShadow: '8px 0 25px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <ListItemText 
                  primary={item.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: 'white',
                      fontWeight: seccionActiva === item.id ? 700 : 500,
                      fontSize: '1.1rem',
                      letterSpacing: '0.5px',
                    }
                  }}
                />
              </ListItem>
            </Slide>
          ))}
        </List>
        
        <Box sx={{ 
          mt: 'auto', 
          p: 3, 
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontStyle: 'italic' 
            }}
          >
            Iturri zaharretik, indar berriz
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;