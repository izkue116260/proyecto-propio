import React from 'react';
import { Box, Typography } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

interface ImagePlaceholderProps {
  width?: string | number;
  height?: string | number;
  text: string;
  borderRadius?: number;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = '100%',
  height = 200,
  text,
  borderRadius = 8,
}) => {
  return (
    <Box
      sx={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        border: '2px dashed #d32f2f',
        borderRadius,
        color: '#666',
        textAlign: 'center',
        p: 2,
      }}
    >
      <PhotoCamera sx={{ fontSize: 48, mb: 1, color: '#d32f2f' }} />
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        {text}
      </Typography>
    </Box>
  );
};

export default ImagePlaceholder;