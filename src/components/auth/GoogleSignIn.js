import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleSignInUser } from "@/store/slices/authSlice";

const GoogleSignIn = () => {
    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            if (tokenResponse.access_token) {
                console.log("Google Sign-In successful!");
                dispatch(googleSignInUser(tokenResponse.access_token));
            }
        },
        onError: (error) => console.error("Google Sign-In Failed:", error),
        scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read",
    });

    return (
        <button
            onClick={() => login()}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
            Sign in with Google
        </button>
    );
};

export default GoogleSignIn;
