import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NewsSection from "./NewsSection";
import QuickNotesSection from "./QuickNotesSection";
import SearchBar from "./SearchBar";
import TopPagesSection from "./TopPagesSection";
import WeatherSection from "./WeatherSection";

export default function StartPage() {
    return (
        <Box sx={{ bgcolor: "#242B33", minHeight: "1000px" }}>
            <Container>
                <Grid container spacing={4}>
                    <SearchBar />
                    <NewsSection />
                    <TopPagesSection />
                    <Grid item sm={12} md={4}>
                        <WeatherSection />
                        <QuickNotesSection />
                    </Grid>
                </Grid>
                <Box sx={{ height: "20px" }} />
            </Container>
        </Box>
    );
}
