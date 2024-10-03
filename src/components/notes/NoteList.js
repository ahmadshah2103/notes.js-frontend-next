import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "@/store/slices/notesSlice";
import NoteCard from "./NoteCard";

const NoteList = () => {
    const dispatch = useDispatch();
    const { notes, loading, error } = useSelector((state) => state.notes);
    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            dispatch(fetchNotes({ userId: user.id, token: token }));
        }
    }, [dispatch, user]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Notes</h2>
            <button
                onClick={() => (window.location.href = "/notes/create")}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4"
            >
                Create New Note
            </button>
            {notes.length === 0 ? (
                <p className="text-gray-600">You don't have any notes yet.</p>
            ) : (
                <ul className="space-y-4">
                    {notes.map((note) => (
                        <NoteCard
                            key={note.id}
                            note={note}
                            userId={user.id}
                            token={token}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NoteList;
