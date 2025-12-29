import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";
import SectionSplit from "@/components/SectionSplit";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile image placeholder */}
          <div className="h-32 w-32 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5" />
          <h1 className="mt-5 text-3xl font-semibold tracking-tight">
            Emilia Päivärinta
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-300 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-6 w-full max-w-2xl">
            <ContactLinks
              email="mariaemilia.paivarinta@gmail.com"
              phone="+34722610406"
              linkedinUrl="www.linkedin.com/in/emilia-päivärinta-8413a8152"
              githubUrl="https://github.com/PaivarintaEmilia"
            />
          </div>
        </div>
      </section>

      {/* Center button to projects */}
      <div className="flex justify-center">
        <Link
          href="/projects"
          className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300/60"
        >
          View my projects →
        </Link>
      </div>

      {/* Split sections */}
      <SectionSplit
        title="About me"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
        imageSide="left"
      />

      <SectionSplit
        title="How I work"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
        imageSide="right"
      />
    </div>
  );
}
