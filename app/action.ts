"use server";

import { supabase } from "@/utils/supabase/server";
import { AuthError } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const userData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signInWithPassword(userData);

  if (error) {
    redirect("/error");
  }

  redirect("/forms");
}

export async function signup(formData: FormData) {
  const userdata = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signUp(userdata);
  checkforthenewregisteresuser(error);
}

export async function loginwithgoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  });

  console.log(error);
  console.log(data);
}

export async function checkforthenewregisteresuser(error: null | AuthError) {
  if (error) {
    redirect("/");
  }

  redirect("/forms");
}
