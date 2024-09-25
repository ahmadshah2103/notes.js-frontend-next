"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "../store/slices/authSlice";

export default function Home() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleSignOut = () => {
        dispatch(signOutUser());
    };

    return (
        <div>
            <h1>
                {user ? `Hey ${user.name}, ` : "Hey there, "}welcome to Notes.js!
            </h1>
            {user ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <Link href="/auth/signin">Sign In</Link>
            )}
        </div>
    );
}
