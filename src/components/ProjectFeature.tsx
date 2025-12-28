type ProjectFeatureProps = {
  title: string;
  description: string;
  githubUrl: string;
  tools: string[];
};

export default function ProjectFeature({
  title,
  description,
  githubUrl,
  tools,
}: ProjectFeatureProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>

      <div className="mt-4 aspect-[16/9] w-full rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
        <div className="flex h-full items-center justify-center text-sm text-zinc-300">
          Project image placeholder
        </div>
      </div>

      <p className="mt-4 leading-7 text-zinc-300">{description}</p>

      <div className="mt-4">
        <a
          className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10 transition"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-zinc-200">Built with</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {tools.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
