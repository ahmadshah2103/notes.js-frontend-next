import fetchAPI from "./api";

export const signIn = async (credentials) => {
    const response = await fetchAPI("/users/signin", {
        method: "POST",
        body: JSON.stringify(credentials),
    });
    return response;
};

export const signUp = async (userData) => {
    const response = await fetchAPI("/users", {
        method: "POST",
        body: JSON.stringify(userData),
    });
    return response;
};

export const googleSignIn = async (accessToken) => {
    const response = await fetchAPI("/users/google_auth", {
        method: "POST",
        body: JSON.stringify(accessToken),
    });
    return response;
};
