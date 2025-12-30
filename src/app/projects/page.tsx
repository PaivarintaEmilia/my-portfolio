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
          Here are some projects from my studies. The API project was built for school, and the Expense Tracker is a personal project to showcase my skills. The websites and e-commerce stores were created during my time as a Technical Project Manager at a Finnish startup alongside my studies.
        </p>
      </section>

      {/* Two featured projects */}
      <section className="grid gap-6 lg:grid-cols-2">
        <ProjectFeature
          title="Expense Tracker"
          description="The Expense Tracker is a dynamic front-end application built with React and TypeScript to help users effectively manage their personal finances. By leveraging Supabase for authentication and data storage, it ensures a seamless and secure user experience. This project highlights my skills in React development, state management, responsive UI design, and working with third-party tools like Supabase."
          githubUrl="https://github.com/PaivarintaEmilia/expense-tracker"
          tools={["React", "TypeScript", "Tailwind", "Database", "Supabase", "CRUD", "Next.JS", "Prettier"]} 
          imageSrc={"/images/expense-tracker.png"} 
          imageAlt={"Screenshot of the landing page of own project Expense tracker."}        />
        <ProjectFeature
          title="API (school project) | ASP.NET Core"
          description="The Financial Management API is a robust back-end solution built using ASP.NET Core, showcasing advanced development capabilities for managing user data, expenses, and income efficiently. This API integrates SQLite for data handling and features comprehensive role-based authentication with JWT. This project demonstrates my expertise in REST API design, database modeling, and clean software architecture."
          githubUrl="https://github.com/PaivarintaEmilia/fullStackBackEnd"
          tools={["CRUD", "ASP:NET Core", "REST", "SQLite"]} 
          imageSrc={"/images/project-img.jpg"} 
          imageAlt={"Illustration image of the project’s code."}        />
      </section>

      {/* Websites section */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Websites and e-commerce
        </h2>
        <p className="mt-3 text-zinc-300 leading-7">
          Here are a few examples of websites I created while working as a Technical Project Coordinator. Please note that the design and structure may have changed since delivery, as clients can edit their sites. Some sites may no longer be in use.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <WebsiteCard
            title="Accessible Website | Samae"
            description="I created an AA-level accessible website for Samae Oy, an expert in diversity and inclusion. The site is designed to reflect the entrepreneur's brand identity and includes features such as adjustable text size, high contrast mode, and readable fonts to ensure inclusivity for all users. The content is organized to guide visitors through the company's services and philosophy effectively."
            websiteUrl="https://samae.fi/"
            imageSrc={"/images/samae-fi.png"}
            imageAlt={"Landing page of Samae website"} />
          <WebsiteCard
            title="e-Commerce | Acoustic Store"
            description="For a company selling acoustic products, I developed a modern and aesthetically pleasing e-commerce platform utilizing WooCommerce. The site offers a seamless shopping experience with clear categorization of products such as wall panels, ceiling solutions, and acoustic lighting. High-quality images and detailed product descriptions assist customers in making informed purchasing decisions."
            websiteUrl="https://akustiikkakauppa.fi/"
            imageSrc={"/images/akustiikkakauppa-fi.png"}
            imageAlt={"Landing page of Acoustic e-commerce."} />
          <WebsiteCard
            title="e-Commerce | Natural Beauty"
            description="For Juhlatalo Ukko Hjalmar, a venue offering rustic romantic settings for various events and accommodations, I developed a website that showcases their services and facilities. The site includes a small e-commerce section implemented with WooCommerce, allowing customers to purchase the company's products online. The design reflects the warm and inviting atmosphere of the venue."
            websiteUrl="https://ukkohjalmar.fi/"
            imageSrc={"/images/ukkohjalmar-fi.png"}
            imageAlt={"Landing page of Natural Beauty e-commerce."} />
          <WebsiteCard
            title="Website | Construction machines"
            description="For JMT Machinery, a company specializing in the import and sale of earthmoving machinery, I developed a responsive website using the Elementor tool. The site is optimized for various devices and includes dynamic features to enhance user engagement. The design emphasizes the company's reliability and expertise in providing high-quality machinery and related services."
            websiteUrl="https://jmtmachinery.fi/"
            imageSrc={"/images/jmtmachinery-fi.png"}
            imageAlt={"Landing page of the construction machine website"} />
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
