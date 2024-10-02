"use client";

import SignIn from "@/components/auth/SignIn";
import GoogleSignIn from "@/components/auth/GoogleSignIn";
import Link from "next/link";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { google } from "@/config";

export default function SignInPage() {
    return (
        <>
            <SignIn />
            <GoogleSignIn />
            <p>
                Don't have an account? <Link href="/auth/signup">Sign Up</Link>
            </p>
        </>
    );
}
