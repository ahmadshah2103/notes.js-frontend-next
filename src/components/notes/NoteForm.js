import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, editNote } from '@/store/slices/notesSlice';
import { useRouter } from 'next/navigation';

const NoteForm = ({ noteId, initialNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        if (initialNote) {
            setTitle(initialNote.title);
            setContent(initialNote.content);
        }
    }, [initialNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const noteData = { title, content };

        if (noteId) {
            dispatch(editNote({ userId: user.id, noteId, note: noteData, token }))
                .unwrap()
                .then(() => {
                    console.log('Note updated successfully');
                    router.push('/notes');
                })
                .catch((error) => {
                    console.error('Failed to update note:', error);
                });
        } else {
            dispatch(addNote({ userId: user.id, note: noteData, token }))
                .unwrap()
                .then(() => {
                    console.log('Note created successfully');
                    setTitle('');
                    setContent('');
                    router.push('/notes');
                })
                .catch((error) => {
                    console.error('Failed to create note:', error);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                {noteId ? 'Update Note' : 'Create Note'}
            </button>
        </form>
    );
};

export default NoteForm;
