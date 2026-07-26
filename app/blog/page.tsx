import Navbar from "@/components/Navbar";
import { getPublishedPosts } from "@/lib/notion";
import Link from "next/link";
export const metadata = {
  title: "Blog",
  description: "Articles and insights for early-career engineers in Nigeria.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main>
      <Navbar />
      <section className="px-6 sm:px-10 lg:px-16 py-16 max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">
          ECF BLOG
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-navy">
          Articles &amp; Insights
        </h1>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="rounded-lg border border-gray-200 p-6 hover:border-gold transition-colors block"
            >
              <h3 className="font-bold text-navy">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {post.summary}
              </p>
              <p className="mt-3 text-xs text-gray-400">{post.date}</p>
            </Link>
          ))}
          {posts.length === 0 && (
            <p className="text-sm text-gray-500">
              No articles published yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}