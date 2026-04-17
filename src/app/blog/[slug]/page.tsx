import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { Section, Button } from "@/components/ui";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-body-sm text-brand-gray-light transition-colors hover:text-brand-blue"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Post header */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-brand-blue-light px-3 py-1 text-body-sm font-medium text-brand-blue">
              {post.category}
            </span>
            <span className="text-body-sm text-brand-gray-light">
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-display-md md:text-display-lg">{post.title}</h1>

          <div className="mt-4 flex items-center gap-3 text-body-sm text-brand-gray-light">
            <span>{post.author}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </div>

        {/* Article body */}
        <article className="prose prose-lg prose-gray max-w-none prose-headings:text-brand-dark prose-a:text-brand-blue">
          <MDXRemote source={post.content} />
        </article>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-brand bg-brand-surface p-8 text-center">
          <h2 className="text-display-sm">Want help implementing this?</h2>
          <p className="mt-3 text-body-md text-brand-gray-light">
            Our team can help you put these ideas into action with a plan
            tailored to your business.
          </p>
          <div className="mt-6">
            <Button href="/contact">Get a Free Consultation</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
