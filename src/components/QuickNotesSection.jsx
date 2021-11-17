import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

export default function QuickNotesSection() {
    const [notes, setNotes] = useState([]);
    const [addNote, setAddNote] = useState("");

    function handleAddNote(e) {
        if (addNote === "") {
            return;
        }
        e.preventDefault();
        notes.push(addNote);
        setNotes(notes);
        setAddNote("");
    }
    function handleDelete(noteToDelete) {
        console.log(noteToDelete);
        const indexToDelete = notes.findIndex((item) => item === noteToDelete);
        notes.splice(indexToDelete, 1);
        setNotes([...notes]);
        setAddNote("");
    }

    return (
        <>
            <Paper variant="outlined" sx={{ width: 1, p: 1, mt: 1 }}>
                <Typography
                    variant="h5"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <EventNoteIcon sx={{ mr: 1 }} />
                    Quick Notes
                </Typography>
            </Paper>
            <Box
                sx={{
                    pt: 1,
                    pb: 1,
                    ml: 2,
                    display: "flex",
                    justifyContent: "center",
                }}
                component="form"
            >
                <TextField
                    id="AddNote"
                    label="Add note"
                    variant="filled"
                    color="secondary"
                    value={addNote}
                    onChange={(e) => setAddNote(e.target.value)}
                    sx={{ mr: 1, width: 1, bgcolor: "white" }}
                />
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={handleAddNote}
                >
                    <AddIcon />
                </Button>
            </Box>
            {notes.map((note) => (
                <Paper
                    variant="outlined"
                    sx={{
                        width: "90%",
                        p: 1,
                        mb: 1,
                        ml: 2,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                    key={note}
                >
                    <Typography flexGrow={1}>{note}</Typography>
                    <Button
                        size="small"
                        color="error"
                        variant="contained"
                        onClick={() => handleDelete(note)}
                    >
                        Delete
                    </Button>
                </Paper>
            ))}
        </>
    );
}
