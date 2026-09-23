import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Brush,
  Check,
  ChevronRight,
  CircleHelp,
  Heart,
  Menu,
  Palette,
  Paintbrush,
  Sparkles,
  ShoppingBag,
  Sun,
  X,
  Hand,
  Focus,
  ListChecks,
  Layers3,
  Droplets,
  Package,
  WandSparkles,
  MonitorOff,
  Instagram,
  Facebook,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/sand-kit-hero.jpg";
import makingImage from "@/assets/sand-making.jpg";
import familyImage from "@/assets/sand-family.jpg";
import playoraLogo from "@/assets/playora-logo.png";

const nav = [
  ["Home", "#home"],
  ["How It Works", "#how-it-works"],
  ["What's Included", "#included"],
  ["Benefits", "#benefits"],
  ["FAQ", "#faq"],
] as const;
const faqs = [
  [
    "What age is the Sticky Sand Art Kit suitable for?",
    "The kit is designed for children ages 4 and up. Because it contains small parts, adult supervision is recommended.",
  ],
  [
    "What comes with the sand art kit?",
    "The kit includes 10 A4 sticky sand art sheets, 13 colored sand bottles, 1 glitter bottle, 1 cleaning brush, 1 mess-free sand tray, and an instruction sheet.",
  ],
  [
    "How does sticky sand art work?",
    "Children peel sections of the adhesive design, pour colored sand onto the exposed area, gently shake away excess sand, and use the brush to clean the remaining loose sand.",
  ],
  [
    "Is this a screen-free activity?",
    "Yes. The kit provides a hands-on creative activity that children can enjoy without a digital device.",
  ],
  [
    "How many colors are included?",
    "The kit includes 13 colored sand bottles, giving children a wide range of colors to work with.",
  ],
  [
    "Does the kit include glitter?",
    "Yes. One glitter bottle is included to add sparkle to finished artwork.",
  ],
  [
    "What is the sand tray for?",
    "The included tray helps contain and collect excess sand while children work, helping create a more organized crafting experience.",
  ],
  [
    "Is a brush included?",
    "Yes. A cleaning brush is included to help remove loose sand during and after the activity.",
  ],
] as const;

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

type OpenNotice = (topic: string) => void;

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      href="#home"
      className={`inline-flex items-center ${inverted ? "rounded-md bg-background px-3 py-1.5" : ""}`}
      aria-label="Playora, back to top"
    >
      <img
        src={playoraLogo}
        alt="Playora"
        width={755}
        height={220}
        className="h-9 w-auto object-contain sm:h-11"
      />
    </a>
  );
}
function Header({ notice }: { notice: OpenNotice }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/70 bg-card/95 backdrop-blur-xl transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}
    >
      <div
        className={`section-wrap flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-[66px]" : "h-[82px]"}`}
      >
        <Brand />
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <a
              className="nav-link text-sm font-semibold text-ink-soft transition-colors hover:text-primary"
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open cart"
            title="Cart"
            onClick={() => notice("Cart")}
          >
            <ShoppingBag className="!size-5" />
          </Button>
          <Button asChild variant="brand" size="brand" className="hidden lg:inline-flex">
            <a href="#purchase">
              Shop the Sand Art Kit <ArrowRight />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="!size-6" /> : <Menu className="!size-6" />}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <nav
          className="absolute inset-x-0 top-full border-b border-border bg-card px-5 py-5 shadow-lg xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 font-semibold hover:bg-muted"
              >
                {label}
              </a>
            ))}
            <Button asChild variant="brand" size="brand" className="mt-3">
              <a href="#purchase" onClick={() => setMenuOpen(false)}>
                Shop the Sand Art Kit <ArrowRight />
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  );
}
function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={`reveal ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-4xl font-black leading-[1.12] sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{text}</p>}
    </div>
  );
}
function ShopLink({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  return (
    <Button asChild variant={outline ? "brandOutline" : "brand"} size="brand">
      <a href="#purchase">
        {children}
        {!outline && <ArrowRight />}
      </a>
    </Button>
  );
}
function Hero() {
  return (
    <section id="home" className="overflow-hidden surface-hero">
      <div className="section-wrap grid items-center gap-10 pb-12 pt-12 lg:min-h-[650px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-16">
        <div className="hero-copy relative z-10 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/40 px-4 py-2 text-xs font-bold text-primary sm:text-sm">
            <Sparkles size={15} /> Create. Peel. Pour. Shake. Sparkle.
          </div>
          <h1 className="font-display text-[2.4rem] font-black leading-[1.08] sm:text-6xl lg:text-[4.5rem]">
            Turn Every Picture Into a <span className="text-primary">Colorful Sand Art</span>{" "}
            Masterpiece!
          </h1>
          <img
            src={heroImage}
            width={1504}
            height={1200}
            fetchPriority="high"
            alt="Sticky sand art kit with colored sand, art sheets, glitter, brush and finished butterfly artwork"
            className="mt-7 aspect-[1.7] w-full rounded-2xl object-cover lg:hidden"
          />
          <p className="mt-6 text-base leading-[1.8] text-ink-soft sm:text-lg">
            Let little hands explore color, creativity, and confidence with our Sticky Sand Art Kit
            for Kids. With pre-cut adhesive designs, 13 vibrant colored sand bottles, glitter, a
            reusable mess-free tray, and a cleaning brush, kids can create beautiful artwork with
            simple, step-by-step fun.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm font-bold">
            <Check className="size-4 text-primary" /> Perfect for kids ages 4+{" "}
            <span className="text-primary">|</span> Screen-Free Creative Play
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ShopLink>Shop the Sand Art Kit</ShopLink>
            <Button asChild variant="brandOutline" size="brand">
              <a href="#how-it-works">
                Start Creating <ChevronRight />
              </a>
            </Button>
          </div>
        </div>
        <div className="hero-visual relative hidden lg:block">
          <div
            className="absolute -left-5 -top-5 size-24 rounded-full border border-primary/30 sm:-left-10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-5 -right-5 size-36 rounded-full bg-gold/30 blur-2xl"
            aria-hidden="true"
          />
          <img
            src={heroImage}
            width={1504}
            height={1200}
            fetchPriority="high"
            alt="Sticky sand art kit with colorful sand bottles, art sheets, glitter, brush and tray holding a finished butterfly artwork"
            className="relative aspect-[1.18] w-full rounded-[2rem] object-cover shadow-[0_30px_70px_-30px_var(--button-shadow)] lg:aspect-[1.03]"
          />
        </div>
      </div>
      <TrustPoints />
    </section>
  );
}
const trust = [
  [Palette, "10 A4 Sand Art Designs"],
  [Droplets, "13 Vibrant Sand Colors"],
  [Sparkles, "Glitter Included"],
  [Brush, "Cleaning Brush Included"],
  [Layers3, "Mess-Free Sand Tray"],
  [Heart, "Ages 4+"],
] as const;
function TrustPoints() {
  return (
    <div className="border-y border-border bg-card/80">
      <div className="section-wrap grid grid-cols-2 gap-x-3 gap-y-5 py-6 sm:grid-cols-3 xl:grid-cols-6">
        {trust.map(([Icon, label]) => (
          <div key={label} className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary/40 text-primary">
              <Icon size={18} />
            </span>
            <span className="text-xs font-bold leading-snug sm:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function WhatIsSandArt() {
  return (
    <section className="surface-ivory py-20 sm:py-28">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={makingImage}
            width={1200}
            height={1008}
            alt="A child pours colored sand onto butterfly artwork inside a craft tray"
            className="image-zoom aspect-[1.12] w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="The joy of making"
            title="A Creative Activity They Can Actually Finish!"
          />
          <div className="mt-7 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>Sticky Sand Art combines the fun of coloring with the tactile experience of sand.</p>
            <p>
              Each activity starts with a pre-designed adhesive sheet. Kids peel selected sections,
              pour their chosen colored sand, gently shake away the excess, and reveal their artwork
              piece by piece.
            </p>
            <p className="font-bold text-foreground">
              The result? A colorful creation they can proudly display.
            </p>
            <p>
              This makes the activity especially engaging because children aren’t simply playing
              with sand — they’re following a process and watching their artwork come to life.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3 font-display text-xl font-black text-primary sm:text-2xl">
            {["Peel", "Pour", "Shake", "Reveal"].map((item, i) => (
              <span className="reveal inline-flex items-center gap-2" key={item}>
                {i > 0 && <ArrowRight className="size-5 text-sage" />}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const items = [
  [
    ImageIcon,
    "10 × A4 Sticky Sand Art Sheets",
    "Large activity sheets with pre-designed adhesive sections.",
  ],
  [
    Droplets,
    "13 × Colored Sand Bottles",
    "A vibrant selection of colors gives children plenty of creative combinations.",
  ],
  [Sparkles, "1 × Glitter Bottle", "Add an extra sparkle to finished artwork."],
  [Brush, "1 × Cleaning Brush", "Helps tidy away loose sand and keep the workspace cleaner."],
  [
    Layers3,
    "1 × Mess-Free Sand Tray",
    "Designed to help contain and collect excess sand during the activity.",
  ],
  [ListChecks, "1 × Instruction Sheet", "Simple guidance to help children understand the process."],
] as const;
function WhatsIncluded() {
  return (
    <section id="included" className="surface-blue py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="The complete kit"
          title="More Than Just Colored Sand"
          text="We designed this kit to make sand art easier, cleaner, and more exciting."
          centered
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([Icon, name, detail], i) => (
            <article
              key={name}
              className="reveal group rounded-lg border border-border/80 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`mb-8 grid size-14 place-items-center rounded-2xl ${i % 3 === 0 ? "bg-secondary/50" : i % 3 === 1 ? "bg-accent/60" : "bg-gold/35"} text-foreground`}
              >
                <Icon size={27} strokeWidth={1.7} />
              </span>
              <h3 className="font-display text-xl font-extrabold">{name}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="font-display text-2xl font-black sm:text-3xl">
            Everything They Need. One Creative Kit.
          </p>
          <ShopLink>Shop the Complete Kit</ShopLink>
        </div>
      </div>
    </section>
  );
}
const steps = [
  ["Pick Your Design", "Choose one of the colorful sand-art designs.", ImageIcon],
  ["Peel the Sticker", "Peel away a selected section to reveal the adhesive surface.", Hand],
  ["Pour Colored Sand", "Choose a color and carefully pour it over the exposed area.", Droplets],
  ["Shake & Brush", "Gently shake off excess sand and use the cleaning brush where needed.", Brush],
  ["Collect the Extra Sand", "Use the mess-free tray to help collect loose sand.", Layers3],
  ["Add Glitter", "Give your masterpiece an extra sparkle with the included glitter.", Sparkles],
  ["Display Your Artwork", "Admire your finished creation and proudly show it off!", Heart],
] as const;
function HowItWorks() {
  return (
    <section id="how-it-works" className="surface-cream py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="How it works"
          title="7 Simple Steps From Blank Sheet to Beautiful Art"
          text="Peel. Pour. Shake. Create. ✨"
          centered
        />
        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-6 top-8 bottom-8 w-px bg-border md:hidden"
            aria-hidden="true"
          />
          {steps.map(([title, detail, Icon], i) => (
            <article
              key={title}
              className="reveal relative flex gap-5 pl-0 md:block md:border-t-2 md:border-border md:pt-9"
            >
              <span className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-black text-primary-foreground md:absolute md:-top-6 md:left-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pb-5 md:pb-0">
                <Icon className="mb-5 hidden size-8 text-primary md:block" strokeWidth={1.6} />
                <h3 className="font-display text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ShopLink>Peel. Pour. Shake. Create. ✨</ShopLink>
        </div>
      </div>
    </section>
  );
}
const benefits = [
  [
    Hand,
    "Fine Motor Skills",
    "Peeling, pouring, pinching, shaking, and brushing involve controlled hand movements.",
  ],
  [
    Focus,
    "Focus & Concentration",
    "Following the individual steps encourages children to slow down and concentrate on completing their artwork.",
  ],
  [
    Palette,
    "Creativity & Color Recognition",
    "Choosing colors and combining them encourages creative expression and helps children explore colors.",
  ],
  [
    ListChecks,
    "Following Instructions",
    "Step-by-step activities introduce children to sequencing and completing a project from beginning to end.",
  ],
] as const;
function Benefits() {
  return (
    <section id="benefits" className="surface-ivory py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Play with purpose"
          title="Where Creativity Meets Learning"
          text="Sand art isn’t just entertaining — the process gives children opportunities to practice important skills while they play."
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([Icon, title, detail], i) => (
            <article
              key={title}
              className="reveal soft-lift rounded-lg border border-border bg-card/85 p-7"
            >
              <span
                className={`mb-7 grid size-14 place-items-center rounded-full ${i % 2 ? "bg-accent/70" : "bg-secondary/50"}`}
              >
                <Icon size={26} strokeWidth={1.7} />
              </span>
              <h3 className="font-display text-xl font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 text-center font-display text-2xl font-black text-primary">
          Creative play can make learning feel like fun.
        </p>
      </div>
    </section>
  );
}
function PromoBanner({
  type,
  title,
  detail,
}: {
  type: "peach" | "sage" | "dark";
  title: string;
  detail: string;
}) {
  return (
    <aside
      className={`${type === "peach" ? "banner-blue" : type === "sage" ? "banner-cream" : "banner-deep text-card"} py-10 sm:py-12`}
    >
      <div className="section-wrap flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-2xl font-black sm:text-3xl">{title}</p>
          <p className="mt-2 text-sm sm:text-base">{detail}</p>
        </div>
        <ArrowRight className="hidden size-9 shrink-0 sm:block" strokeWidth={1.5} />
      </div>
    </aside>
  );
}
function MessFreeSection() {
  return (
    <section className="relative overflow-hidden surface-mist py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="particle absolute left-[8%] top-[20%] size-2 rounded-full bg-gold" />
        <span className="particle absolute right-[13%] top-[15%] size-1.5 rounded-full bg-primary/50" />
        <span className="particle absolute bottom-[18%] left-[55%] size-2 rounded-full bg-secondary" />
      </div>
      <div className="section-wrap relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="A little less to clean" title="Big Creativity. Less Cleanup." />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>Sand art is fun — but parents don’t always love finding sand everywhere.</p>
            <p>That’s why our kit includes a dedicated mess-free sand tray and a cleaning brush.</p>
            <p>
              The tray helps collect excess sand during the activity, while the brush helps tidy
              remaining loose sand from the artwork and workspace.
            </p>
          </div>
          <p className="mt-7 font-display text-xl font-black">
            Designed for a More Organized Sand-Art Experience
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-bold">
            {[
              [Layers3, "Sand Tray"],
              [Brush, "Cleaning Brush"],
              [Droplets, "Controlled Pouring"],
              [Sparkles, "Easy Cleanup"],
            ].map(([Icon, label]) => {
              const ItemIcon = Icon as typeof Layers3;
              return (
                <span key={label as string} className="flex items-center gap-2">
                  <ItemIcon className="size-5 text-primary" />
                  {label as string}
                </span>
              );
            })}
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={makingImage}
            width={1200}
            height={1008}
            alt="Sand tray containing loose sand while a child creates butterfly sand artwork"
            className="image-zoom aspect-[1.08] w-full object-cover"
          />
        </div>
      </div>
      <p className="section-wrap relative mt-14 border-t border-foreground/15 pt-8 text-center font-display text-2xl font-black sm:text-4xl">
        LET THEM CREATE. LET THE TRAY CATCH THE MESS.
      </p>
    </section>
  );
}
function ColorSection() {
  return (
    <section className="overflow-hidden surface-ivory py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Color their world"
          title="A Rainbow of Creative Choices"
          text="With 13 colored sand bottles, children aren’t limited to just a few basic shades."
          centered
        />
        <div
          className="mt-14 flex snap-x gap-4 overflow-x-auto pb-5 sm:justify-center sm:gap-5"
          aria-label="Thirteen colorful sand shades"
        >
          {Array.from({ length: 13 }, (_, i) => (
            <div
              key={i}
              className="flex shrink-0 snap-center flex-col items-center gap-3"
              aria-label={`Color ${i + 1}`}
            >
              <div className="flex h-28 w-12 flex-col overflow-hidden rounded-b-xl rounded-t-md border-2 border-border/70 bg-card shadow-sm sm:h-36 sm:w-14">
                <div className="h-5 border-b border-border bg-muted" />
                <div className={`sand-tone-${i + 1} mt-auto h-[72%] rounded-t-md`} />
              </div>
              <span className="text-xs font-bold text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 text-sm font-semibold sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Choose their favorite colors",
            "Experiment with different combinations",
            "Create colorful patterns",
            "Add glitter for extra sparkle",
            "Make each artwork their own",
          ].map((text) => (
            <span key={text} className="flex items-center gap-2">
              <Check className="size-4 shrink-0 text-primary" />
              {text}
            </span>
          ))}
        </div>
        <p className="mt-14 border-t border-border pt-9 text-center font-display text-3xl font-black sm:text-5xl">
          13 COLORS. <span className="text-primary">COUNTLESS CREATIONS.</span>
        </p>
      </div>
    </section>
  );
}
function GlitterSection() {
  return (
    <section className="surface-cream py-20 sm:py-24">
      <div className="section-wrap grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="A finishing touch"
            title="Because Every Masterpiece Deserves a Little Magic"
          />
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            The included glitter bottle gives children another way to personalize their artwork.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Add sparkle to selected areas and transform an already colorful creation into something
            extra special.
          </p>
          <p className="mt-8 font-display text-xl font-black text-primary sm:text-2xl">
            Create it. Customize it. Make it sparkle. ✨
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={heroImage}
            width={1504}
            height={1200}
            alt="Finished colorful butterfly artwork beside a glitter bottle and colorful sand"
            className="image-zoom aspect-[1.28] w-full object-cover object-[65%_57%]"
          />
          <Sparkles
            className="particle absolute right-7 top-7 size-9 text-gold"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
function ScreenFreeSection() {
  return (
    <section className="surface-ivory py-20 sm:py-28">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1 overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={makingImage}
            width={1200}
            height={1008}
            alt="Child creating hands-on sand artwork at a table without a screen"
            className="image-zoom aspect-[1.08] w-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Hands-on moments"
            title="Put the Screen Down. Pick the Colors Up."
            text="Give kids an activity that encourages hands-on creativity away from digital screens."
          />
          <p className="mt-6 text-ink-soft">
            Our Sticky Sand Art Kit creates an opportunity for children to:
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "Create with their hands",
              "Explore colors",
              "Follow a project",
              "Practice concentration",
              "Complete something they can display",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-semibold">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent">
                  <Check size={15} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
function ParentChildSection() {
  return (
    <section className="surface-blue py-20 sm:py-28">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Better together" title="A Creative Activity to Enjoy Together" />
          <p className="mt-7 text-lg leading-relaxed text-ink-soft">
            Parents can join children during the activity, help with the steps, talk about colors,
            and celebrate their finished creations.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            It’s a simple way to turn crafting into quality creative time together.
          </p>
          <p className="mt-8 font-display text-2xl font-black text-primary">
            Create Memories, One Sand Art Picture at a Time. ❤️
          </p>
        </div>
        <div className="overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={familyImage}
            width={1200}
            height={1056}
            alt="Parent and child making colorful sand artwork together at home"
            className="image-zoom aspect-[1.13] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
function FAQ() {
  return (
    <section id="faq" className="surface-ivory py-20 sm:py-28">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Good to know" title="Frequently Asked Questions" />
          <p className="mt-6 text-ink-soft">A few helpful details before the creativity begins.</p>
        </div>
        <Accordion type="single" collapsible className="border-t border-border">
          {faqs.map(([question, answer], i) => (
            <AccordionItem key={question} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="py-5 font-display text-base font-bold hover:no-underline sm:text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-ink-soft">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
function FinalCTA({ notice }: { notice: OpenNotice }) {
  return (
    <section id="purchase" className="surface-hero py-20 sm:py-28">
      <div className="section-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={heroImage}
            width={1504}
            height={1200}
            alt="Complete sticky sand art kit with colored sand, art sheets, glitter, brush and tray"
            className="aspect-[1.15] w-full object-cover"
          />
        </div>
        <div>
          <Eyebrow>Make something wonderful</Eyebrow>
          <h2 className="font-display text-4xl font-black leading-[1.12] sm:text-5xl lg:text-6xl">
            Ready to Turn Sand Into Art?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Everything they need to create colorful, screen-free masterpieces is right inside the
            kit.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="brand" size="brand" onClick={() => notice("Shop the Sand Art Kit")}>
              <ShoppingBag /> Shop the Sand Art Kit
            </Button>
            <Button asChild variant="brandOutline" size="brand">
              <a href="#how-it-works">
                <Palette /> Start Creating
              </a>
            </Button>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink-soft">
            <Check className="size-4 text-primary" /> Creative fun for kids ages 4+
          </p>
        </div>
      </div>
    </section>
  );
}
function Footer({ notice }: { notice: OpenNotice }) {
  return (
    <footer className="bg-ink-soft pb-28 pt-16 text-background sm:pb-12">
      <div className="section-wrap grid gap-12 border-b border-background/20 pb-14 md:grid-cols-[1.6fr_1fr_1fr] lg:gap-24">
        <div>
          <Brand inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/70">
            Making creativity easier, mess-free and more fun for little hands.
          </p>
          <div className="mt-6 flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="border border-background/30 text-background hover:bg-background/10 hover:text-background"
              aria-label="Instagram information"
              title="Instagram"
              onClick={() => notice("Instagram")}
            >
              <Instagram />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="border border-background/30 text-background hover:bg-background/10 hover:text-background"
              aria-label="Facebook information"
              title="Facebook"
              onClick={() => notice("Facebook")}
            >
              <Facebook />
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold !text-background">Explore</h3>
          <nav className="mt-5 flex flex-col items-start gap-3" aria-label="Footer navigation">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-background/70 transition-colors hover:text-background"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold !text-background">Customer</h3>
          <div className="mt-5 flex flex-col items-start gap-3">
            {["Contact", "Shipping", "Returns", "Privacy Policy", "Terms"].map((item) => (
              <Button
                key={item}
                variant="link"
                className="h-auto p-0 text-sm font-normal text-background/70 hover:text-background"
                onClick={() => notice(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="section-wrap pt-6 text-xs text-background/55">
        © {new Date().getFullYear()} Playora. All rights reserved.
      </div>
    </footer>
  );
}
function NoticeDialog({ topic, close }: { topic: string | null; close: () => void }) {
  useEffect(() => {
    if (!topic) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [topic, close]);
  if (!topic) return null;
  const shopping = topic === "Cart" || topic === "Shop the Sand Art Kit";
  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/55 p-5"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-title"
        className="w-full max-w-md rounded-lg bg-card p-7 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-5">
          <span className="grid size-12 place-items-center rounded-full bg-secondary/50 text-primary">
            {shopping ? <ShoppingBag /> : <CircleHelp />}
          </span>
          <Button variant="ghost" size="icon" aria-label="Close" onClick={close}>
            <X />
          </Button>
        </div>
        <h2 id="notice-title" className="mt-5 font-display text-2xl font-black">
          {shopping ? "Shopping isn't available yet" : topic}
        </h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          {shopping
            ? "The kit is shown here, but checkout and cart have not been connected yet. No order has been placed."
            : "Details for this page have not been provided yet. Please check back when they're available."}
        </p>
        <Button variant="brand" size="brand" className="mt-7 w-full" onClick={close}>
          Got it
        </Button>
      </div>
    </div>
  );
}
function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-border bg-card/95 px-5 py-3 shadow-lg backdrop-blur-xl sm:hidden">
      <div className="min-w-0">
        <p className="truncate font-display text-sm font-black">Sticky Sand Art Kit</p>
        <p className="text-xs text-muted-foreground">Creative fun for ages 4+</p>
      </div>
      <Button asChild variant="brand" size="brand" className="h-11 shrink-0 px-5">
        <a href="#purchase">
          Shop Now <ArrowRight />
        </a>
      </Button>
    </div>
  );
}
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
