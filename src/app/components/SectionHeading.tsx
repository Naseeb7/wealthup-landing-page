export default function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center">
      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--color-primary)] md:text-5xl">
        {title}
      </h2>
      <p className="max-w-3xl text-base text-[var(--color-primary)]/80 md:text-xl">
        {description}
      </p>
    </div>
  );
}
