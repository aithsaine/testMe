"use client"
import Footer from "@/components/footer";
import Nav from "@/components/Nav";

import Section from "@/components/Section";
import Services from "@/components/Services";
import SponsorsTicker from "@/components/Sponsors";

export default function Home() {


  return (
    <main >
      <Nav />
      <Section />
      <SponsorsTicker />
      <Services />
      <Footer />
    </main>
  );
}
