"use client"
import Nav from "@/components/Nav";

import Section from "@/components/Section";
import Services from "@/components/Services";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])

  return (
    <main >
      <Section />
      <Services />
    </main>
  );
}
