"use client";

import SignIn from "@/components/auth/SignIn";
import Link from "next/link"

export default function SignInPage() {
    return (
        <>
            <SignIn />
            <p className="text-center mt-4 text-gray-600">
                Don't have an account? <Link href="/auth/signup" className="text-blue-500 hover:text-blue-700">Sign Up</Link>
            </p>
        </>
    );
}
