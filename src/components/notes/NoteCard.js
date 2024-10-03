import React from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "@/store/slices/notesSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NoteCard = ({ note, userId, token }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleDelete = () => {
        dispatch(removeNote({ userId, noteId: note.id, token }))
            .unwrap()
            .then(() => {
                console.log("Note deleted successfully");
            })
            .catch((error) => {
                console.error("Failed to delete note:", error);
            });
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
                <Link href={`/notes/${note.id}`} className="text-blue-600 hover:text-blue-800">
                    {note.title}
                </Link>
            </h3>
            <p className="text-gray-600 mb-4">{note.content.substring(0, 100)}...</p>
            <div className="flex space-x-2">
                <button
                    onClick={() => router.push(`/notes/${note.id}/edit`)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                    Update
                </button>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default NoteCard;
