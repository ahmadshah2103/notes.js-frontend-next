"use client";

import SignUp from "@/components/auth/SignUp";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <>
            <SignUp />
            <p>
                Already have an account?{" "}
                <Link href="/auth/signin">Sign In</Link>
            </p>
        </>
    );
}
