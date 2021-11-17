import { Divider, Paper, Typography } from "@mui/material";
import axios from "axios";

import React, { useState, useEffect } from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import HomeIcon from "@mui/icons-material/Home";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ColorizeIcon from "@mui/icons-material/Colorize";
import AirIcon from "@mui/icons-material/Air";
import NorthEastIcon from "@mui/icons-material/NorthEast";

export default function WeatherSection() {
    const [weather, setWeather] = useState({ time: "T" });

    function handleWeatherCode(code) {
        switch (code) {
            case 0:
                return "Clear sky";
            case (1, 2, 3):
                return "Cloudy";
            case (45, 48):
                return "Fog";
            case (51, 53, 55):
                return "Drizzle";
            case (56, 57):
                return "Freezing Drizzle";
            case (61, 63, 65):
                return "Rain";
            case (66, 67):
                return "Freezing Rain";
            case (71, 73, 75):
                return "Snow fall";
            case 77:
                return "Snow grains";
            case (80, 81, 82):
                return "Rain showers";
            case (85, 86):
                return "Snow showers";
            case (95, 96, 97, 98, 99):
                return "Thunderstorm";
            default:
                return "Clear sky";
        }
    }
    useEffect(() => {
        async function fetchWeather() {
            await axios
                .get(
                    "https://api.open-meteo.com/v1/forecast?latitude=52.2297&longitude=21.0122&current_weather=true&timezone=Europe%2FBerlin",
                )
                .then((result) => {
                    setWeather(result.data.current_weather);
                });
        }
        fetchWeather();
    }, []);
    return (
        <>
            <Paper variant="outlined" sx={{ width: 1, p: 1 }}>
                <Typography
                    variant="h5"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CloudIcon sx={{ mr: 1 }} /> Weather
                </Typography>
            </Paper>
            <Paper
                variant="outlined"
                sx={{
                    p: 1,
                    mt: 1,
                    ml: 2,
                }}
            >
                <Typography display="flex" justifyItems="baseline">
                    <HomeIcon sx={{ mr: 1 }} /> Location: Katowice
                </Typography>
                <Typography display="flex" justifyItems="baseline">
                    {" "}
                    <WatchLaterIcon sx={{ mr: 1 }} /> Time:{" "}
                    {weather.time.replace("T", " ")}
                </Typography>
                <Divider />
                <Typography display="flex" justifyItems="baseline">
                    {" "}
                    <ColorizeIcon sx={{ mr: 1 }} />
                    Temperature: {weather.temperature}&deg;C{" "}
                </Typography>
                <Typography display="flex" justifyItems="baseline">
                    {" "}
                    <CloudIcon sx={{ mr: 1 }} />
                    Weather: {handleWeatherCode(weather.weathercode)}
                </Typography>
                <Divider />
                <Typography display="flex" justifyItems="baseline">
                    {" "}
                    <AirIcon sx={{ mr: 1 }} /> WindSpeed: {weather.windspeed}
                    Km/h
                </Typography>
                <Typography display="flex" justifyItems="baseline">
                    {" "}
                    <NorthEastIcon sx={{ mr: 1 }} />
                    WindDirection: {weather.winddirection}&deg;{" "}
                </Typography>
            </Paper>
        </>
    );
}
