import ContactLinks from "@/components/ContactLinks";
import ProjectFeature from "@/components/ProjectFeature";
import WebsiteCard from "@/components/WebsiteCard";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      {/* Page intro */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight">My projects</h1>
        <p className="mt-3 max-w-3xl text-zinc-300 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Two featured projects */}
      <section className="grid gap-6 lg:grid-cols-2">
        <ProjectFeature
          title="API Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          githubUrl="https://github.com/your-github/api-project"
          tools={["TypeScript", "Next.js", "REST", "PostgreSQL", "Auth", "Testing"]}
        />

        <ProjectFeature
          title="Expense Tracker"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
          githubUrl="https://github.com/your-github/expense-tracker"
          tools={["React", "TypeScript", "Tailwind", "Database", "Charts", "CRUD"]}
        />
      </section>

      {/* Websites section */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Websites</h2>
        <p className="mt-3 text-zinc-300 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <WebsiteCard
            title="Website Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            websiteUrl="https://example.com"
          />
          <WebsiteCard
            title="Website Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            websiteUrl="https://example.com"
          />
          <WebsiteCard
            title="Website Project 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            websiteUrl="https://example.com"
          />
          <WebsiteCard
            title="Website Project 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            websiteUrl="https://example.com"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight">Let’s work together</h2>
        <p className="mt-3 max-w-3xl text-zinc-300 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out and
          let’s talk about opportunities.
        </p>

        <div className="mt-6">
          <ContactLinks
            email="mariaemilia.paivarinta@gmail.com"
            phone="+34722610406"
            linkedinUrl="www.linkedin.com/in/emilia-päivärinta-8413a8152"
            githubUrl="https://github.com/PaivarintaEmilia"
            compact
          />
        </div>
      </section>
    </div>
  );
}
