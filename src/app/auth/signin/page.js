"use client";

import SignIn from "@/components/auth/SignIn";
import Link from "next/link";

export default function SignInPage() {
    return (
        <>
            <SignIn />
            <p>
                Don't have an account? <Link href="/auth/signup">Sign Up</Link>
            </p>
        </>
    );
}
