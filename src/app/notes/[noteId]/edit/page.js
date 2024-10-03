'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';
import NoteForm from '@/components/notes/NoteForm';
import { fetchNote } from '@/store/slices/notesSlice';

const EditNotePage = () => {
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const { user, token } = useSelector((state) => state.auth);
  const { currentNote, loading, error } = useSelector((state) => state.notes);

  useEffect(() => {
    if (user && noteId) {
      dispatch(fetchNote({ userId: user.id, noteId, token }));
    }
  }, [dispatch, user, noteId, token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Edit Note</h1>
      {currentNote && (
        <NoteForm noteId={noteId} initialNote={currentNote} />
      )}
    </div>
  );
};

export default EditNotePage;
