import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;