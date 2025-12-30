import Link from "next/link";
import Image from "next/image";
import ContactLinks from "@/components/ContactLinks";
import SectionSplit from "@/components/SectionSplit";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile image placeholder */}
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/10">
            <Image
              src="/images/profile.jpg"
              alt="Emilia Päivärinta"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight">
            Emilia Päivärinta
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-300 leading-7">
            I’m a final-year Information & Communication Technology student returning to Finland 
            after seven years abroad (Spain, Malta, and most recently Asia). During my studies I 
            worked as a Technical Project Manager at a Finnish start-up, leading B2B website and e-commerce 
            projects end-to-end in WordPress, where I learned a lot about clear communication, practical problem-solving, 
            and shipping work that actually gets used. I’m now looking for an internship or junior role where I can grow fast, 
            contribute to real projects, and keep that small “spark in the eye” even when the task list is long.
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
        text="I’ve spent the last seven years living abroad Spain, Malta, and currently Asia, and I’m excited 
        to move back to Finland for good and start building my long-term career. I have a Bachelor of Business 
        Administration background, and I’m now finishing my final year in ICT. I’m motivated by learning that 
        turns into tangible results: building, improving, testing, and iterating until something works smoothly 
        for real people. I also genuinely enjoy international environments and connecting with different kinds of 
        people and new teams, new perspectives, and new challenges feel more energizing than intimidating."
        imageSide="left"
      />

      <SectionSplit
        title="How I work"
        text="I bring a mix of people skills and technical curiosity: from HR coordination and customer service 
        to managing technical projects alongside my studies. As a Technical Project Manager, I collaborated with 
        Finnish B2B clients from kickoff to delivery, translating goals into clear next steps, keeping communication 
        simple and honest, and making sure details didn’t slip through the cracks. Technically, I built and developed 
        WordPress websites and e-commerce stores, learned the foundations of web projects (structure, styling, content, 
        and the “why did this suddenly break?” moments), and got comfortable taking responsibility for the full process. 
        I’m quick to learn, calm with different personalities and cultures, and I’m the type who reads up on things 
        after work because I actually want to understand them—not just get them done."
        imageSide="right"
      />
    </div>
  );
}
