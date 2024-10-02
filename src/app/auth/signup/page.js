"use client";

import SignUp from "@/components/auth/SignUp";
import Link from "next/link";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { google } from "@/config";
import GoogleSignIn from "@/components/auth/GoogleSignIn";

export default function SignUpPage() {
    return (
        <>
            <SignUp />
            <GoogleSignIn />
            <p>
                Already have an account?{" "}
                <Link href="/auth/signin">Sign In</Link>
            </p>
        </>
    );
}
