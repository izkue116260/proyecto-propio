import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const AgendaSection: React.FC = () => {
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
};

export default AgendaSection;