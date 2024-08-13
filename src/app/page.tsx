"use client"
import Nav from "@/components/Nav";

import Section from "@/components/Section";
import Services from "@/components/Services";
import SponsorsTicker from "@/components/Sponsors";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])

  return (
    <main >
      <Nav />
      <Section />
      <SponsorsTicker />
      <Services />
    </main>
  );
}
