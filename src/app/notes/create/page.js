'use client';

import { useSelector } from 'react-redux';
import NoteForm from '@/components/notes/NoteForm';

const CreateNotePage = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return <div>Please sign in to create a note.</div>;

  return (
    <div>
      <NoteForm />
    </div>
  );
};

export default CreateNotePage;
