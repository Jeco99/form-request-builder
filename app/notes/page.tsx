"use client";

import { supabase } from "@/utils/supabase/server";
import { useEffect } from "react";
import FormCard from "@/components/form";
export default function Notes() {
  useEffect(() => {
    const getFormInformation = async () => {
      const { data: forminformation } = await supabase
        .from("forminformation")
        .select();
      console.log(forminformation);
    };

    getFormInformation();
  });
  // const { data: notes } = await supabase.from("notes").select();

  // const { data: personalInfo } = await supabase.from("personalinfo").select();

  return (
    <>
      <h1>Notes</h1>
      <FormCard />
    </>
  );
}
