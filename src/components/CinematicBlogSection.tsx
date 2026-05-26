import Link from 'next/link';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  image: string;
  imageAlt?: string;
};

export default function CinematicBlogSection({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <img
        src={post.image}
        alt={post.imageAlt || post.title}
        className="absolute inset-0 h-full w-full object-cover cinematic-image"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      <div className="absolute inset-0 star-field opacity-40" />

      <div className="relative z-10 flex min-h-screen items-center px-8 md:px-20">
        <div className="max-w-3xl text-white">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-amber-300">
            {String(index + 1).padStart(2, '0')} / 06
          </p>

          <h2 className="mb-6 text-5xl font-semibold leading-tight md:text-7xl">
            {post.title}
          </h2>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            {post.excerpt}
          </p>

          <p className="mb-8 text-sm text-white/70">By {post.author}</p>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
          >
            Read Essay <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}