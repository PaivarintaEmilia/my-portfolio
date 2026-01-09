import Image from "next/image";

type WebsiteCardProps = {
  title: string;
  description: string;
  websiteUrl: string;
  imageSrc: string;
  imageAlt: string;
  tools: string[];
};

export default function WebsiteCard({
  title,
  description,
  websiteUrl,
  imageSrc,
  imageAlt,
  tools,
}: WebsiteCardProps) {

  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 aspect-[16/9] w-full relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-top"
        />
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

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-zinc-200">Highlights</h3>
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
