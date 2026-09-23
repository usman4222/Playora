import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Header,
  Hero,
  WhatIsSandArt,
  WhatsIncluded,
  PromoBanner,
  HowItWorks,
  Benefits,
  MessFreeSection,
  ColorSection,
  GlitterSection,
  ScreenFreeSection,
  ParentChildSection,
  FAQ,
  FinalCTA,
  Footer,
  NoticeDialog,
  MobileStickyCTA,
  faqs,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Playora Sticky Sand Art Kit for Kids | Creative Screen-Free Play" },
      {
        name: "description",
        content:
          "Create colorful sand art with 10 A4 designs, 13 colored sand bottles, glitter, a mess-free tray and cleaning brush. A hands-on creative activity for kids ages 4+.",
      },
      {
        property: "og:title",
        content: "Playora Sticky Sand Art Kit for Kids | Creative Screen-Free Play",
      },
      {
        property: "og:description",
        content:
          "Peel, pour, shake and reveal colorful artwork with the Sticky Sand Art Kit for kids ages 4+.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const elements = document.querySelectorAll<HTMLElement>(".reveal, .image-zoom");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight * 0.85) {
        element.classList.add("reveal-pending");
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header notice={setNotice} />
      <main>
        <Hero />
        <WhatIsSandArt />
        <WhatsIncluded />
        <PromoBanner
          type="peach"
          title="LESS MESS. MORE CREATIVE FUN. 🧺"
          detail="Includes a Mess-Free Sand Tray & Cleaning Brush."
        />
        <HowItWorks />
        <Benefits />
        <MessFreeSection />
        <ColorSection />
        <GlitterSection />
        <PromoBanner
          type="sage"
          title="TURN SAND INTO ART. 🎨"
          detail="A Hands-On, Screen-Free Creative Activity for Kids 4+."
        />
        <ScreenFreeSection />
        <ParentChildSection />
        <PromoBanner
          type="dark"
          title="LITTLE HANDS. BIG IMAGINATION. 💖"
          detail="Create Something They’ll Be Proud to Display."
        />
        <FAQ />
        <FinalCTA notice={setNotice} />
      </main>
      <Footer notice={setNotice} />
      <MobileStickyCTA />
      <NoticeDialog topic={notice} close={() => setNotice(null)} />
    </>
  );
}
