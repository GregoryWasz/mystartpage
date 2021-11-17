import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";

export default function TopPagesSection() {
    return (
        <Grid item sm={12} md={4}>
            <Paper variant="outlined" sx={{ width: 1, p: 1 }}>
                <Typography
                    variant="h5"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <StarIcon sx={{ mr: 1 }} />
                    Popular pages
                </Typography>
            </Paper>
            <Paper
                onClick={() => {
                    window.open("https://facebook.com");
                }}
                variant="outlined"
                sx={{
                    p: 1,
                    mt: 1,
                    ml: 2,
                    display: "Flex",
                    justifyContent: "center",
                    aliginItems: "baseline",
                }}
            >
                <FacebookIcon />
                <Typography>Facebook</Typography>
            </Paper>
            <Paper
                onClick={() => {
                    window.open("https://youtube.com");
                }}
                variant="outlined"
                sx={{
                    p: 1,
                    mt: 1,
                    ml: 2,
                    display: "Flex",
                    justifyContent: "center",
                    aliginItems: "baseline",
                }}
            >
                <YouTubeIcon />
                <Typography>Youtube</Typography>
            </Paper>
            <Paper
                onClick={() => {
                    window.open("https://instagram.com");
                }}
                variant="outlined"
                sx={{
                    p: 1,
                    mt: 1,
                    ml: 2,
                    display: "Flex",
                    justifyContent: "center",
                    aliginItems: "baseline",
                }}
            >
                <InstagramIcon />
                <Typography>Instagram</Typography>
            </Paper>
        </Grid>
    );
}
