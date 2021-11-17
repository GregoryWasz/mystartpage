import { Grid, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        document.location.href =
            "https://www.google.com/search?q=" + searchValue;
        console.log(searchValue);
        setSearchValue("");
    }

    return (
        <Grid item xs={12} md={12}>
            <Box
                sx={{
                    pt: 6,
                    pb: 2,
                    mr: -2,
                    display: "flex",
                    justifyContent: "center",
                }}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="Search"
                    label="Search..."
                    variant="filled"
                    color="secondary"
                    onChange={(e) => setSearchValue(e.target.value)}
                    sx={{ mr: 1, width: 1, bgcolor: "white" }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    color="secondary"
                >
                    <SearchIcon />
                </Button>
            </Box>
        </Grid>
    );
}
