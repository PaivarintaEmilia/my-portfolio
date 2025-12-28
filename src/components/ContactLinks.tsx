type ContactLinksProps = {
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  compact?: boolean;
};

export default function ContactLinks({
  email,
  phone,
  linkedinUrl,
  githubUrl,
  compact = false,
}: ContactLinksProps) {
  const item =
    "rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 transition";
  const wrap = compact ? "flex flex-wrap gap-2" : "mt-4 grid gap-2 sm:grid-cols-2";

  return (
    <div className={wrap}>
      <a className={item} href={`mailto:${email}`}>
        Email: <span className="text-white">{email}</span>
      </a>
      <a className={item} href={`tel:${phone}`}>
        Phone: <span className="text-white">{phone}</span>
      </a>
      <a className={item} href={linkedinUrl} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a className={item} href={githubUrl} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  );
}
