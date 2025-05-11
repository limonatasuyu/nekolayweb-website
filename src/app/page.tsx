"use client";

import React from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CTAButtons } from "@/components/cta-buttons";
import { ContactForm } from "@/components/contact-form";
import { Partners } from "@/components/partners";
import { Advantages } from "@/components/advantages";
import { Features } from "@/components/features";
import { Steps } from "@/components/steps";
import { Footer } from "@/components/footer";
import { CTABanner } from "@/components/cta-banner";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <>
      <main className="text-center font-sans p-4 flex flex-col items-center justify-center min-h-screen bg-[#F9F9F9]">
        <Header />
        <Hero />
        <CTAButtons />
        <Partners />
        <ContactForm />
        <Advantages />
        <Features />
        <Steps />
        <CTABanner />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
