
import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Box,
  Chip,
  ThemeProvider,
  createTheme,
  CssBaseline,
  type SelectChangeEvent,
} from "@mui/material";
import {
  WbSunny,
  Cloud,
  Grain,
  Thermostat,
  Visibility,
  Air,
} from "@mui/icons-material";

// Tema personalizado para la aplicación
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

// Datos simulados del clima
const weatherData = {
  madrid: {
    city: "Madrid",
    country: "España",
    temperature: 22,
    condition: "Soleado",
    icon: <WbSunny sx={{ fontSize: 60, color: "#FFA500" }} />,
    humidity: 45,
    windSpeed: 12,
    visibility: 10,
    feelsLike: 25,
  },
  barcelona: {
    city: "Barcelona",
    country: "España",
    temperature: 19,
    condition: "Parcialmente nublado",
    icon: <Cloud sx={{ fontSize: 60, color: "#87CEEB" }} />,
    humidity: 60,
    windSpeed: 8,
    visibility: 8,
    feelsLike: 21,
  },
  valencia: {
    city: "Valencia",
    country: "España",
    temperature: 24,
    condition: "Soleado",
    icon: <WbSunny sx={{ fontSize: 60, color: "#FFA500" }} />,
    humidity: 40,
    windSpeed: 15,
    visibility: 12,
    feelsLike: 26,
  },
  sevilla: {
    city: "Sevilla",
    country: "España",
    temperature: 28,
    condition: "Muy soleado",
    icon: <WbSunny sx={{ fontSize: 60, color: "#FF6347" }} />,
    humidity: 35,
    windSpeed: 10,
    visibility: 15,
    feelsLike: 32,
  },
  bilbao: {
    city: "Bilbao",
    country: "España",
    temperature: 16,
    condition: "Lluvioso",
    icon: <Grain sx={{ fontSize: 60, color: "#4682B4" }} />,
    humidity: 80,
    windSpeed: 20,
    visibility: 5,
    feelsLike: 14,
  },
};

function App() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (event: SelectChangeEvent) => {
    setSelectedCity(event.target.value);
  };

  const currentWeather = selectedCity
    ? weatherData[selectedCity as keyof typeof weatherData]
    : null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 4,
            width: "100%",
            borderRadius: 3,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          }}
        >
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              :sunny: Aplicación del Clima
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Consulta el clima de tu ciudad favorita
            </Typography>
          </Box>

          <Box display="flex" justifyContent="center" mb={4}>
            <FormControl sx={{ minWidth: 300 }}>
              <InputLabel
                id="city-select-label"
                sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
              >
                Selecciona una ciudad
              </InputLabel>
              <Select
                labelId="city-select-label"
                value={selectedCity}
                label="Selecciona una ciudad"
                onChange={handleCityChange}
                sx={{
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value="madrid">Madrid</MenuItem>
                <MenuItem value="barcelona">Barcelona</MenuItem>
                <MenuItem value="valencia">Valencia</MenuItem>
                <MenuItem value="sevilla">Sevilla</MenuItem>
                <MenuItem value="bilbao">Bilbao</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {currentWeather && (
            <Box mt={4}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 0.95)",
                  color: "text.primary",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={3}
                    flexWrap="wrap"
                  >
                    {currentWeather.icon}
                    <Box ml={3} textAlign="center">
                      <Typography
                        variant="h2"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        {currentWeather.temperature}°C
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        {currentWeather.city}, {currentWeather.country}
                      </Typography>
                    </Box>
                  </Box>

                  <Box textAlign="center" mb={3}>
                    <Chip
                      label={currentWeather.condition}
                      color="primary"
                      sx={{ fontSize: "1.1rem", py: 2, px: 1 }}
                    />
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap={2}
                  >
                    <Box textAlign="center" minWidth={120}>
                      <Thermostat color="action" sx={{ fontSize: 30, mb: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Sensación térmica
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {currentWeather.feelsLike}°C
                      </Typography>
                    </Box>

                    <Box textAlign="center" minWidth={120}>
                      <Grain color="action" sx={{ fontSize: 30, mb: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Humedad
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {currentWeather.humidity}%
                      </Typography>
                    </Box>

                    <Box textAlign="center" minWidth={120}>
                      <Air color="action" sx={{ fontSize: 30, mb: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Viento
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {currentWeather.windSpeed} km/h
                      </Typography>
                    </Box>

                    <Box textAlign="center" minWidth={120}>
                      <Visibility color="action" sx={{ fontSize: 30, mb: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Visibilidad
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {currentWeather.visibility} km
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          )}

          {!currentWeather && (
            <Box textAlign="center" mt={4}>
              <Typography variant="h6" sx={{ opacity: 0.8 }}>
                :point_up_2: Selecciona una ciudad para ver el clima
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
