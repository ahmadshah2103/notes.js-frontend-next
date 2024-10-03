import fetchAPI from "./api";

export const getNotes = async (userId, token) => {
    const response = await fetchAPI(`/users/${userId}/notes`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const getNote = async (userId, noteId, token) => {
    const response = await fetchAPI(`/users/${userId}/notes/${noteId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const createNote = async (userId, note, token) => {
    const response = await fetchAPI(`/users/${userId}/notes`, {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const updateNote = async (userId, noteId, note, token) => {
    const response = await fetchAPI(`/users/${userId}/notes/${noteId}`, {
        method: "PUT",
        body: JSON.stringify(note),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const deleteNote = async (userId, noteId, token ) => {
    const response = await fetchAPI(`/users/${userId}/notes/${noteId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};
