import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogs';

type BlogDetailPageProps = {
  params?: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#f5f0e8] text-neutral-900">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-8 text-white md:px-20">
        <img
          src={post.image}
          alt={post.imageAlt || post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
        <div className="absolute inset-0 star-field opacity-30" />

        <div className="relative z-10 max-w-4xl">
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm uppercase tracking-[0.25em] text-white/70 hover:text-white"
          >
            ← Back to Articles
          </Link>

          <h1 className="mb-6 text-6xl font-semibold leading-tight md:text-8xl">
            {post.title}
          </h1>

          <p className="max-w-2xl text-xl leading-8 text-white/85">
            {post.excerpt}
          </p>

          <p className="mt-8 text-sm text-white/65">By {post.author}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-24">
        <p className="mb-16 border-l-4 border-neutral-900 pl-8 text-3xl italic leading-snug text-neutral-800">
          {post.excerpt}
        </p>

        <div className="space-y-8 text-lg leading-9 text-neutral-700">
          {post.content.split('\n').map((paragraph, index) =>
            paragraph.trim() ? <p key={index}>{paragraph}</p> : null
          )}
        </div>
      </article>
    </main>
  );
}
