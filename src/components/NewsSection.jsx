import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect } from "react";
import FiberNewIcon from "@mui/icons-material/FiberNew";

export default function NewsSection() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            await axios
                .get("https://inshortsapi.vercel.app/news?category=science")
                .then((result) => {
                    setNews(result.data.data.slice(0, 5));
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        fetchNews();
    }, []);
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
                    <FiberNewIcon sx={{ mr: 1 }} /> Trending News
                </Typography>
            </Paper>
            {news.map((singleNews) => (
                <Paper
                    key={singleNews.url}
                    variant="outlined"
                    sx={{
                        p: 1,
                        mt: 1,
                        ml: 2,
                        display: "flex",

                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography fontSize={9}>
                            {singleNews.author}
                        </Typography>
                        <Typography fontSize={8} color="gray">
                            {singleNews.date}
                        </Typography>
                    </Box>
                    <img
                        src={singleNews.imageUrl}
                        alt="imageUrl"
                        width="100%"
                    />
                    <Typography fontSize={12}> {singleNews.content}</Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        href={singleNews.url}
                        sx={{ mt: 1 }}
                    >
                        Read more
                    </Button>
                </Paper>
            ))}
        </Grid>
    );
}
