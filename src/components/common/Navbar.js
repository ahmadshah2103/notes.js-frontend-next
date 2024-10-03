"use client";

import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const router = useRouter();

    const handleSignOut = () => {
        dispatch(signOutUser());
        router.push("/auth/signin");
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Notes.js
                </Link>
                <div className="space-x-4">
                    {user ? (
                        <>
                            <button
                                onClick={handleSignOut}
                                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/auth/signin"
                            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
