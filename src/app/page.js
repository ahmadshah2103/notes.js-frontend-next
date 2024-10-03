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
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">
                {user ? `Hey ${user.name}, ` : "Hey there, "}welcome to
                Notes.js!
            </h1>
            {user ? (
                <div className="space-x-4">
                    <div className="flex flex-col items-center space-y-4">
                        <Link href="/notes" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                            Go to Notes
                        </Link>
                        <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                            Sign Out
                        </button>
                    </div>
                </div>
            ) : (
                <Link href="/auth/signin" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                    Sign In
                </Link>
            )}
        </div>
    );
}
