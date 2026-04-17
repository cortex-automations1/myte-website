import type { Metadata } from "next";
import { PostCard } from "@/components/blog";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-brand-blue/[0.07] blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="container-narrow relative">
          <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
            Blog
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Insights &amp; Resources
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Practical insights on IT strategy, cybersecurity, and technology for
            small and mid-sized businesses.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-body-lg text-brand-gray-light">
              Posts coming soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
