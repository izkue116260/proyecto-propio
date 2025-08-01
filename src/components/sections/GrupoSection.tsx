import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const GrupoSection: React.FC = () => {
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
};

export default GrupoSection;