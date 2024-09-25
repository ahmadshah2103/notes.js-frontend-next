import fetchAPI from "./api";

export const getNotes = async (userId) => {
    const response = await fetchAPI(`/users/${userId}/notes`);
    return response;
};

export const getNote = async (userId, noteId) => {
    const response = await fetchAPI(`/users/${userId}/notes/${noteId}`);
    return response;
};

export const createNote = async (userId, note) => {
    const response = await fetchAPI(`/users/${userId}/notes`, {
        method: "POST",
        body: JSON.stringify(note),
    });
    return response;
};

export const updateNote = async (userId, noteId, note) => {
    const response = await fetchAPI(`/users/${userId}/notes/${noteId}`, {
        method: "PUT",
        body: JSON.stringify(note),
    });
    return response;
};

export const deleteNote = async (userId, noteId) => {
    const response = await fetchAPI(`/users/${userId}/notes/${noteId}`, {
        method: "DELETE",
    });
    return response;
};
