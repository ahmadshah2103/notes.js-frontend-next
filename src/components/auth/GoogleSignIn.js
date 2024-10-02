import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleSignInUser } from "@/store/slices/authSlice";

const GoogleSignIn = () => {
    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            if (tokenResponse.access_token) {
                console.log(
                    "Google Sign-In successful!"
                );
                dispatch(googleSignInUser(tokenResponse.access_token));
            }
        },
        onError: (error) => console.error("Google Sign-In Failed:", error),
        scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read",
    });

    return <button onClick={() => login()}>Sign in with Google</button>;
};

export default GoogleSignIn;
