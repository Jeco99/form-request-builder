"use client";

import { signup, loginwithgoogle } from "../action";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <h1>Create an Account</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />

        <button formAction={signup}>Sign Up</button>
        <Link href={"/"}>
          <button type="button">Already have an Account?</button>
        </Link>
      </form>
      <button formAction={loginwithgoogle}>Log in with Google</button>
    </>
  );
}
