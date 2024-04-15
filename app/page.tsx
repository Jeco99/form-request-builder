"use client";

import { login, loginwithgoogle } from "./action";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <h1>Welcome to the site</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <Link href={"/signup"}>
          <button type="button">Create an Account</button>
        </Link>
      </form>
      <button formAction={loginwithgoogle}>Log in with Google</button>
    </>
  );
}
