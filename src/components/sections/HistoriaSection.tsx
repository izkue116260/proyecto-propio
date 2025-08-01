import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const HistoriaSection: React.FC = () => {
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
};

export default HistoriaSection;