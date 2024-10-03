'use client'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import { fetchNote, removeNote } from '@/store/slices/notesSlice';
import Link from 'next/link';

export default function NotePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { noteId } = useParams();
  const { user, token } = useSelector((state) => state.auth);
  const { currentNote, loading, error } = useSelector((state) => state.notes);

  useEffect(() => {
    if (user && noteId) {
      dispatch(fetchNote({ userId: user.id, noteId, token }));
    }
  }, [dispatch, user, noteId]);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this note?')) {
      await dispatch(removeNote({ userId: user.id, noteId, token }));
      router.push('/notes');
    }
  };

  if (!user) return <div className="text-center text-xl">Please sign in to view this note.</div>;
  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  if (!currentNote) return <div className="text-center text-xl">Note not found.</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/notes" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        &larr; Back to Notes
      </Link>
      <h1 className="text-3xl font-bold mb-4">{currentNote.title}</h1>
      <p className="text-gray-700 mb-6">{currentNote.content}</p>
      <div className="flex space-x-2">
        <Link href={`/notes/${noteId}/edit`}>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">Edit</button>
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

