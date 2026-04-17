import Link from "next/link";
import { Card } from "@/components/ui";
import type { BlogPost } from "@/lib/blog";

type PostCardProps = {
  post: BlogPost;
};

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card hover className="flex flex-col">
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-full bg-brand-blue-light px-3 py-1 text-body-sm font-medium text-brand-blue">
          {post.category}
        </span>
        <span className="text-body-sm text-brand-gray-light">
          {post.readingTime}
        </span>
      </div>

      <h2 className="text-display-sm">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors duration-200 hover:text-brand-blue"
        >
          {post.title}
        </Link>
      </h2>

      <p className="mt-3 flex-1 text-body-md text-brand-gray-light">
        {post.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-body-sm text-brand-gray-light">
        <span>{post.author}</span>
        <time dateTime={post.date}>{formattedDate}</time>
      </div>
    </Card>
  );
}
