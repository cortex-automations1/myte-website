import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui";
import { PostCard } from "@/components/blog";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section>
      <SectionHeading
        title="Blog"
        subtitle="Practical insights on IT strategy, cybersecurity, and technology for small and mid-sized businesses."
      />

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
    </Section>
  );
}
