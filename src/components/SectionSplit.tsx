import Image from "next/image";

type SectionSplitProps = {
  title: string;
  text: string;
  imageSide?: "left" | "right";
  imageSrc: string;
  imageAlt: string;
};

export default function SectionSplit({
  title,
  text,
  imageSide = "left",
  imageSrc,
  imageAlt,
}: SectionSplitProps) {
  const isLeft = imageSide === "left";

  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div
        className={[
          "flex flex-col gap-6 md:gap-10",
          isLeft ? "md:flex-row" : "md:flex-row-reverse",
        ].join(" ")}
      >
        {/* Image placeholder */}
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/3] w-full relative rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-middle"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <div className="flex h-full flex-col justify-center">
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-3 leading-7 text-zinc-300">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
