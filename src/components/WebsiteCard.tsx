type WebsiteCardProps = {
  title: string;
  description: string;
  websiteUrl: string;
};

export default function WebsiteCard({
  title,
  description,
  websiteUrl,
}: WebsiteCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>

      <div className="mt-4 aspect-[16/9] w-full rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
        <div className="flex h-full items-center justify-center text-sm text-zinc-300">
          Website image placeholder
        </div>
      </div>

      <p className="mt-4 text-zinc-300 leading-7">{description}</p>

      <a
        className="mt-4 inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10 transition"
        href={websiteUrl}
        target="_blank"
        rel="noreferrer"
      >
        Open website →
      </a>
    </article>
  );
}
