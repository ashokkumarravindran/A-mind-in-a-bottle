import { blogPosts } from '@/data/blogs';
import CinematicBlogSection from '@/components/CinematicBlogSection';
import WeatherWidget from '@/components/WeatherWidget';

export default function BlogPage() {
  return (
    <main className="bg-black">
      <WeatherWidget />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-center text-white">
        {/* Ambient effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_40%)]" />
        
        <div className="relative z-10 max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-amber-400/60">
            A quiet space
          </p>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight text-white/90">
            A mind, observing itself
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/50">
            Small reflections on life, presence, and the moments we usually overlook.
          </p>
        </div>
      </section>

      {blogPosts.map((post, index) => (
        <CinematicBlogSection key={post.slug} post={post} index={index} />
      ))}
    </main>
  );
}
