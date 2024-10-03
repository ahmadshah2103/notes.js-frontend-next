"use client";

import SignUp from "@/components/auth/SignUp";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <>
            <SignUp />
            <p className="text-center mt-4 text-gray-600">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-blue-500 hover:text-blue-700">Sign In</Link>
            </p>
        </>
    );
}
