import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote,
} from "@/services/notesService";
import {
    setPendingState,
    setRejectedState,
} from "../utils/setNotesState";

export const fetchNotes = createAsyncThunk(
    "notes/fetchNotes",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await getNotes(userId);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchNote = createAsyncThunk(
    "notes/fetchNote",
    async ({ userId, noteId }, { rejectWithValue }) => {
        try {
            const response = await getNote(userId, noteId);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNote = createAsyncThunk(
    "notes/createNote",
    async ({ userId, note }, { rejectWithValue }) => {
        try {
            const response = await createNoteService(userId, note);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const editNote = createAsyncThunk(
    "notes/updateNote",
    async ({ userId, noteId, note }, { rejectWithValue }) => {
        try {
            const response = await updateNoteService(userId, noteId, note);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeNote = createAsyncThunk(
    "notes/deleteNote",
    async ({ userId, noteId }, { rejectWithValue }) => {
        try {
            await deleteNoteService(userId, noteId);
            return noteId;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    notes: [],
    currentNote: null,
    error: null,
    loading: false,
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, setPendingState)
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.loading = false;
                state.notes = action.payload;
                state.error = null;
            })
            .addCase(fetchNotes.rejected, setRejectedState);
        builder
            .addCase(fetchNote.pending, setPendingState)
            .addCase(fetchNote.fulfilled, (state, action) => {
                state.loading = false;
                state.currentNote = action.payload;
                state.error = null;
            })
            .addCase(fetchNote.rejected, setRejectedState);
        builder
            .addCase(addNote.pending, setPendingState)
            .addCase(addNote.fulfilled, (state, action) => {
                state.loading = false;
                state.notes.push(action.payload);
                state.error = null;
            })
            .addCase(addNote.rejected, setRejectedState);
        builder
            .addCase(editNote.pending, setPendingState)
            .addCase(editNote.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.notes.findIndex(note => note.id === action.payload.id);
                if (index !== -1) {
                    state.notes[index] = action.payload;
                }
                state.error = null;
            })
            .addCase(editNote.rejected, setRejectedState);
        builder
            .addCase(removeNote.pending, setPendingState)
            .addCase(removeNote.fulfilled, (state, action) => {
                state.loading = false;
                state.notes = state.notes.filter(note => note.id !== action.payload);
                state.error = null;
            })
            .addCase(removeNote.rejected, setRejectedState);
    },
});

export default notesSlice.reducer;
